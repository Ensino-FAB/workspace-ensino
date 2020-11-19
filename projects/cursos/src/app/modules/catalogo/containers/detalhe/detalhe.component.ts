import { Component, OnInit } from '@angular/core';
import { of, Subscription, timer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { mapTo, mergeAll, share, takeUntil } from 'rxjs/operators';
import { Catalogo } from '../../../../models/catalogo.model';
import { CatalogoFacade } from '../../catalogo.facade';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
})
export class DetalheComponent implements OnInit {
  private subs$: Subscription[] = [];
  public isLoading = false;
  public id: number;
  public catalogo: Catalogo;
  public catalogoLabel: string;

  constructor(private route: ActivatedRoute, private facade: CatalogoFacade) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;

      const getCatalogo$ = this.facade.findCatalogo(this.id).pipe(share());
      const isLoading$ = of(
        timer(150).pipe(mapTo(true), takeUntil(getCatalogo$)),
        getCatalogo$.pipe(mapTo(false))
      ).pipe(mergeAll());

      this.subs$.push(
        isLoading$.subscribe((status) => {
          this.isLoading = status;
        }),
        getCatalogo$.subscribe((item) => {
          if (item) {
            this.catalogo = item;
            this.catalogoLabel = item.nome + ' - ' + item.id;
          }
        })
      );
    });
  }
}
