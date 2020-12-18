import { Component, OnInit } from '@angular/core';
import { of, Subscription, timer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { mapTo, mergeAll, share, takeUntil } from 'rxjs/operators';
import { Pessoa } from '../../../../models/pessoa.model';
import { PessoaFacade } from '../../pessoa.facade';
import { fadeIn } from '../../../../app.animation';

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
  public pessoa: Pessoa;

  constructor(private route: ActivatedRoute, private facade: PessoaFacade) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;

      const getPessoa$ = this.facade.findPessoa(this.id).pipe(share());
      const isLoading$ = of(
        timer(150).pipe(mapTo(true), takeUntil(getPessoa$)),
        getPessoa$.pipe(mapTo(false))
      ).pipe(mergeAll());

      this.subs$.push(
        isLoading$.subscribe((status) => {
          this.isLoading = status;
        }),
        getPessoa$.subscribe((item) => {
          if (item) {
            this.pessoa = item;
          }
        })
      );
    });
  }
}
