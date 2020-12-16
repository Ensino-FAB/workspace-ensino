import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ConclusaoFacade } from '../../conclusao.facade';
import { ActivatedRoute } from '@angular/router';
import { mapTo, mergeAll, share, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { fadeIn } from '../../../../../../../ensino-commons/src/lib/utils/animation';
import { ConclusaoCursoResponse } from '../../../../models/conclusao-curso-response.model';

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
  public conclusao: ConclusaoCursoResponse;

  constructor(private route: ActivatedRoute, private facade: ConclusaoFacade) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;

      const getOrganizacao$ = this.facade.conclusaoService
        .find(this.id)
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
            this.conclusao = item;
          }
        })
      );
    });
  }
}
