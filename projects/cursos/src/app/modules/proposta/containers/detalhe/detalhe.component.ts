import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeIn } from '../../../../../../../cursos/src/app/app.animation';
import { Proposta } from '../../../../../../../cursos/src/app/models/proposta.model';
import { Subscription, of, timer } from 'rxjs';
import { share, mapTo, takeUntil, mergeAll } from 'rxjs/operators';
import { PropostaFacade } from '../../proposta.facade';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
  animations: [fadeIn()],
})
export class DetalheComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  _isLoading = false;

  _id: number;
  _rev: number;

  constructor(private route: ActivatedRoute, private facade: PropostaFacade) {}

  alteracaoOrcamentaria: Proposta;
  tasks: any[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this._rev = params.rev;
      this._id = params.id;

      const getAlteracaoOrcamentaria$ = this.facade
        .getProposta(params.id)
        .pipe(share());
      const isLoading$ = of(
        timer(150).pipe(mapTo(true), takeUntil(getAlteracaoOrcamentaria$)),
        getAlteracaoOrcamentaria$.pipe(mapTo(false))
      ).pipe(mergeAll());

      this.subs$.push(
        isLoading$.subscribe((status) => {
          this._isLoading = status;
        }),
        getAlteracaoOrcamentaria$.subscribe((item: any) => {
          if (item) {
            console.log(item);
            this.alteracaoOrcamentaria = item.entity;
            this.tasks = item.tasks;
          }
        })
      );
    });
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub$) => {
      sub$.unsubscribe();
    });
  }
}
