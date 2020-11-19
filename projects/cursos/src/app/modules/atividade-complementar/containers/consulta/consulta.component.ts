import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TableColumn } from '@cca-fab/cca-fab-components-common';
import { Subscription, timer } from 'rxjs';
import { mapTo, mergeAll, takeUntil, share, delay } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { AtividadeComplementarFacade } from '../../atividade-complementar.facade';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
})
export class ConsultaComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  // tslint:disable-next-line: variable-name
  _isLoading = false;

  atividadeSearch = new FormGroup({
    q: new FormControl(''),
    cargaHoraria: new FormControl(''),
    descricao: new FormControl(''),
    nome: new FormControl(''),
  });

  columns: TableColumn[] = [
    {
      field: 'nome',
      title: 'Nome',
      width: '10%',
    },
    {
      field: 'descricao',
      title: 'Descricao',
      width: '10%',
    },
    {
      field: 'cargaHoraria',
      title: 'Carga Horária',
      width: '60%',
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
    private facade: AtividadeComplementarFacade,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.options = [
      { name: 'Nome', value: 'nome' },
      { name: 'Descrição', value: 'descricao' },
      { name: 'Carga Horária', value: 'cargaHoraria' },
    ];

    this.refresh();
  }

  // tslint:disable-next-line: typedef
  refresh() {
    const search = {
      ...this.atividadeSearch.value,
      page: this.page ? this.page - 1 : 0,
      size: this.pageSize,
      sort: this.orderBy.map((item) => (this.asc ? item : item + ',desc')),
    };
    const getAtividadeComplementar$ = this.facade
      .getAllAtividadeComplemetarService(search)
      .pipe(share());
    const isLoading$ = of(
      timer(150).pipe(mapTo(true), takeUntil(getAtividadeComplementar$)),
      getAtividadeComplementar$.pipe(mapTo(false))
    ).pipe(mergeAll());

    this.subs$.push(
      isLoading$.subscribe((status) => {
        this._isLoading = status;
      }),
      getAtividadeComplementar$.subscribe((res) => {
        this.count = res.totalElements;
        // console.log('Dados :' + JSON.stringify(res));

        this.data = res.content.map((item) => ({
          id: `${item?.id}`,
          nome: `${item.nome}`,
          descricao: `${item.descricao}`,
          cargaHoraria: `${item.cargaHoraria}`,
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

  onDelete(id: number): void {
    this.subs$.push(
      this.facade.delete(id).subscribe(() => {
        this.refresh();
        this.toastService.show({
          message: 'Atividade Complementar deletada com sucesso!',
          type: 'success',
        });
      })
    );
  }

  // tslint:disable-next-line: typedef
  clean() {
    this.atividadeSearch.reset();
    this.refresh();
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
