import { Component, OnInit } from '@angular/core';
import { AtividadeComplementar } from '../../../../models/atividade-complementar.model';
import { of, Subscription, timer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AtividadeComplementarFacade } from '../../atividade-complementar.facade';
import { mapTo, mergeAll, share, takeUntil } from 'rxjs/operators';
import { fadeIn } from '../../../../../app/app.animation';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
  animations: [fadeIn()],
})
export class DetalheComponent implements OnInit {
  private subs$: Subscription[] = [];
  public isLoading = false;
  public id: number;
  public atividadeComplementar: AtividadeComplementar;
  public atividadeComplementarLabel = 'teste';

  constructor(
    private route: ActivatedRoute,
    private facade: AtividadeComplementarFacade
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;

      const getAtividadeComplementar$ = this.facade
        .findAtividadeComplementar(this.id)
        .pipe(share());
      const isLoading$ = of(
        timer(150).pipe(mapTo(true), takeUntil(getAtividadeComplementar$)),
        getAtividadeComplementar$.pipe(mapTo(false))
      ).pipe(mergeAll());

      this.subs$.push(
        isLoading$.subscribe((status) => {
          this.isLoading = status;
        }),
        getAtividadeComplementar$.subscribe((item) => {
          if (item) {
            this.atividadeComplementar = item;
            console.log(item);
          }
        })
      );
    });
  }
}
