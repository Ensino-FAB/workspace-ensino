import { mapTo, mergeAll, share, takeUntil } from 'rxjs/operators';
import { Curso } from './../../../../models/curso.model';
import { CursoFacade } from './../../curso.facade';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
})
export class DetalheComponent implements OnInit {
  private subs$: Subscription[] = [];
  public isLoading = false;
  public id: number;
  public curso: Curso;
  public cursoLabel: string;

  constructor(private route: ActivatedRoute, private facade: CursoFacade) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;

      const getCurso$ = this.facade.findCurso(this.id).pipe(share());
      const isLoading$ = of(
        timer(150).pipe(mapTo(true), takeUntil(getCurso$)),
        getCurso$.pipe(mapTo(false))
      ).pipe(mergeAll());

      this.subs$.push(
        isLoading$.subscribe((status) => {
          this.isLoading = status;
        }),
        getCurso$.subscribe((item) => {
          if (item) {
            this.curso = item;
            this.cursoLabel = item.nome + ' - ' + item.codigo;
          }
        })
      );
    });
  }
}
