import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TableColumn } from '@cca-fab/cca-fab-components-common';
import { Subscription, timer } from 'rxjs';
import { mapTo, mergeAll, takeUntil, share, delay } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { CursoFacade } from '../../curso.facade';
import { ToastService } from '../../../../../../../ensino-commons/src/public-api';
import { fadeIn } from '../../../../../../../cursos/src/app/app.animation';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  animations: [fadeIn()],
})
export class ConsultaComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  // tslint:disable-next-line: variable-name
  _isLoading = false;

  cursoSearch = new FormGroup({
    codigo: new FormControl(''),
    nome: new FormControl(''),
  });

  columns: TableColumn[] = [
    {
      field: 'tipo',
      title: 'Tipo',
      width: '15%',
    },
    {
      field: 'codigo',
      title: 'Código',
      width: '10%',
    },
    {
      field: 'codigoCnpq',
      title: 'Código CNPQ',
      width: '10%',
    },
    {
      field: 'nome',
      title: 'Nome',
      width: '50%',
    },
  ];

  data = [];
  loadindMockData = new Array(10).fill({
    descricao: '',
    status: '',
  });

  options: object[];

  asc = true;
  pageSize = 20;
  page = 1;
  count: number;
  orderBy: string[] = ['id'];
  totalPages = 1;

  constructor(
    private facade: CursoFacade,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.options = [
      { name: 'Código', value: 'codigo' },
      { name: 'Código CNPQ', value: 'codigoCnpq' },
      { name: 'Nome', value: 'nome' },
      { name: 'Tipo', value: 'tipo' },
    ];

    this.refresh();
  }

  // tslint:disable-next-line: typedef
  refresh() {
    const search = {
      ...this.cursoSearch.value,
      page: this.page ? this.page - 1 : 0,
      size: this.pageSize,
      sort: this.orderBy.map((item) => (this.asc ? item : item + ',desc')),
    };
    const getCurso$ = this.facade.getAllCurso(search).pipe(share());
    const isLoading$ = of(
      timer(150).pipe(mapTo(true), takeUntil(getCurso$)),
      getCurso$.pipe(mapTo(false))
    ).pipe(mergeAll());

    this.subs$.push(
      isLoading$.subscribe((status) => {
        this._isLoading = status;
      }),
      getCurso$.subscribe((res) => {
        // console.log('Dados :' + JSON.stringify(res));

        this.data = res.content.map((item) => ({
          id: `${item?.id}`,
          codigo: `${item.codigo}`,
          codigoCnpq: `${item.codigoCnpq}`,
          nome: `${item.nome}`,
          tipo: `${item.tipo}`,
        }));

        this.totalPages = res.totalPages;
      })
    );
  }

  // tslint:disable-next-line: typedef
  handlePageSizeChange(newSize: number) {
    this.pageSize = newSize;
    this.page = 1;
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  onFirstPage() {
    this.page = 1;
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  onLastPage() {
    this.page = this.totalPages;
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  handlePageIndexChange(page: number) {
    this.page = page;
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  handleNextPage() {
    this.page = Math.min(this.page + 1, this.totalPages);
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  handlePreviousPage() {
    this.page = Math.max(this.page - 1, 1);
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  handleSortChange(a) {
    this.page = 1;
    if (a === null) {
      this.orderBy = ['id'];
    } else {
      this.orderBy = [a];
    }
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  handleInvertSort() {
    this.asc = !this.asc;
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.page = 1;
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  clean() {
    this.cursoSearch.reset();
    this.refresh();
  }

  onDelete(id: number): void {
    this.subs$.push(
      this.facade.delete(id).subscribe(() => {
        this.refresh();
        this.toastService.show({
          message: 'Curso deletado com sucesso!',
          type: 'success',
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
