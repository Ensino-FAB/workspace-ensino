import { share, mapTo, takeUntil, mergeAll } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropostaFacade } from '../../proposta.facade';
import { Subscription, of, timer } from 'rxjs';
import { PropostaResponse } from 'projects/cursos-conclusao/src/app/models/proposta-response.model';
import { fadeIn } from 'projects/ensino-commons/src/public-api';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
  animations: [fadeIn()],
})
export class DetalheComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private facade: PropostaFacade) {}

  private subs$: Subscription[] = [];

  public id: number;
  public loading = false;
  public proposta: PropostaResponse;
  public tasks: any[] = [];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    const getProposta$ = this.facade.getProposta(this.id).pipe(share());

    const isLoading$ = of(
      timer(150).pipe(mapTo(true), takeUntil(getProposta$)),
      getProposta$.pipe(mapTo(false))
    ).pipe(mergeAll());

    this.subs$.push(
      isLoading$.subscribe((status) => (this.loading = status)),
      getProposta$.subscribe((item) => {
        if (item) {
          console.log(item.entity);
          this.proposta = item.entity;
          this.tasks = item.tasks;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub$) => {
      sub$.unsubscribe();
    });
  }
}
