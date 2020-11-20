import { PropostaFacade } from './../../proposta.facade';
import { Proposta } from './../../../../models/proposta.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, of, timer } from 'rxjs';
import { share, mapTo, takeUntil, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
})
export class DetalheComponent implements OnInit {
  private subs$: Subscription[] = [];
  public isLoading = false;
  public id: number;
  public proposta: Proposta;
  public propostaLabel: string;

  constructor(private route: ActivatedRoute, private facade: PropostaFacade) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;

      const getProposta$ = this.facade.findProposta(this.id).pipe(share());
      const isLoading$ = of(
        timer(150).pipe(mapTo(true), takeUntil(getProposta$)),
        getProposta$.pipe(mapTo(false))
      ).pipe(mergeAll());

      this.subs$.push(
        isLoading$.subscribe((status) => {
          this.isLoading = status;
        }),
        getProposta$.subscribe((item) => {
          console.log(item);
          if (item) {
            this.proposta = item;
            this.propostaLabel = 'Detalhar proposta';
          }
        })
      );
    });
  }
}
