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
  _isLoading = false;
  cursoSearch = new FormGroup({
    tipo: new FormControl(''),
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
    },
    {
      field: 'disciplina',
      title: 'Disciplina',
      width: '20%',
    },
    {
      field: 'cargaHoraria',
      title: 'Carga Horária',
      width: '10%',
    },
  ];
  data = [];
  loadingMockData = new Array(10).fill({
    tipo: '',
    codigo: '',
    codigoCnpq: '',
    nome: '',
    descricao: '',
    disciplina: '',
    cargaHoraria: '',
  });

  options: object[];
  filterOptions: object[];
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

    this.filterOptions = [
      { name: 'Curso', value: 'CURSO' },
      { name: 'Atividade Complementar', value: 'ATIVIDADE_COMPLEMENTAR' },
    ];

    this.refresh();
  }

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
        this.data = res.content.map((item) => ({
          id: item?.id,
          codigo: item.codigo,
          codigoCnpq: item.codigoCnpq,
          nome: item.nome,
          disciplina: item.disciplina,
          cargaHoraria: item.cargaHoraria,
          tipo: item.tipoCapacitacao.descricao,
          tipoCod: item.tipoCapacitacao.tipo,
        }));

        this.totalPages = res.totalPages;
      })
    );
  }

  handlePageSizeChange(newSize: number) {
    this.pageSize = newSize;
    this.page = 1;
    this.refresh();
  }

  onFirstPage() {
    this.page = 1;
    this.refresh();
  }

  onLastPage() {
    this.page = this.totalPages;
    this.refresh();
  }

  handlePageIndexChange(page: number) {
    this.page = page;
    this.refresh();
  }

  handleNextPage() {
    this.page = Math.min(this.page + 1, this.totalPages);
    this.refresh();
  }

  handlePreviousPage() {
    this.page = Math.max(this.page - 1, 1);
    this.refresh();
  }

  handleSortChange(a) {
    this.page = 1;
    if (a === null) {
      this.orderBy = ['id'];
    } else {
      this.orderBy = [a];
    }
    this.refresh();
  }

  handleInvertSort() {
    this.asc = !this.asc;
    this.refresh();
  }

  onSubmit() {
    this.page = 1;
    this.refresh();
  }

  clean() {
    this.cursoSearch.reset();
    this.refresh();
  }
  handleFilterChange(event): void {}

  onDelete(id: number): void {
    this.subs$.push(
      this.facade.delete(id).subscribe(() => {
        this.refresh();
        this.toastService.show({
          message: 'Capacitação removida com sucesso!',
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
