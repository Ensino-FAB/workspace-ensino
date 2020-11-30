import { Component, OnInit } from '@angular/core';
import { of, Subscription, timer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { mapTo, mergeAll, share, takeUntil } from 'rxjs/operators';
import { Organizacao } from '../../../../models/organizacao.model';
import { OrganizacaoFacade } from '../../organizacao-facade';
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
  public organizacao: Organizacao;

  constructor(
    private route: ActivatedRoute,
    private facade: OrganizacaoFacade
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;

      const getOrganizacao$ = this.facade
        .findOrganizacao(this.id)
        .pipe(share());
      const isLoading$ = of(
        timer(150).pipe(mapTo(true), takeUntil(getOrganizacao$)),
        getOrganizacao$.pipe(mapTo(false))
      ).pipe(mergeAll());

      this.subs$.push(
        isLoading$.subscribe((status) => {
          this.isLoading = status;
        }),
        getOrganizacao$.subscribe((item) => {
          if (item) {
            this.organizacao = item;
            console.log(item);
          }
        })
      );
    });
  }
}
