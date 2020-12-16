import { Component, OnDestroy, OnInit } from '@angular/core';
import { fadeIn, ToastService } from 'projects/ensino-commons/src/public-api';
import { of, Subscription, timer } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { TableColumn } from '@cca-fab/cca-fab-components-common';
import { mapTo, mergeAll, share, takeUntil } from 'rxjs/operators';
import { ConclusaoFacade } from '../../conclusao.facade';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  animations: [fadeIn()],
})
export class ConsultaComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  public isLoading = false;

  conclusaoSearch = new FormGroup({
    capacitacao: new FormControl(''),
    pessoa: new FormControl(''),
    local: new FormControl(''),
  });

  columns: TableColumn[] = [
    {
      field: 'capacitacao',
      title: 'Capacitação',
      width: '20%',
    },

    {
      field: 'local',
      title: 'Local',
      width: '20%',
    },

    {
      field: 'dtInicio',
      title: 'Data de Início',
      width: '12%',
    },
    {
      field: 'dtFim',
      title: 'Data de fim',
      width: '12%',
    },

    {
      field: 'pessoa',
      title: 'Pessoa',
      width: '20%',
    },
  ];

  data = [];
  loadindMockData = new Array(10).fill({
    capacitacao: '',
    local: '',
    dtFim: '',
    dtInicio: '',
    status: '',
  });

  options: object[];
  optionsStatus: object[];

  asc = true;
  pageSize = 20;
  page = 1;
  count: number;
  orderBy: string[] = ['id'];
  totalPages = 1;

  constructor(
    private facade: ConclusaoFacade,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.options = [{ name: 'Capacitação', value: 'capacitacao' }];
    this.options = [{ name: 'Pessoa', value: 'pessoa' }];
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  refresh() {
    const search = {
      ...this.conclusaoSearch.value,
      page: this.page ? this.page - 1 : 0,
      size: this.pageSize,
      sort: this.orderBy.map((item) => (this.asc ? item : item + ',desc')),
    };

    const getConclusao$ = this.facade.conclusaoService
      .findAll(search)
      .pipe(share());
    const isLoading$ = of(
      timer(150).pipe(mapTo(true), takeUntil(getConclusao$)),
      getConclusao$.pipe(mapTo(false))
    ).pipe(mergeAll());

    this.subs$.push(
      isLoading$.subscribe((status) => {
        this.isLoading = status;
      }),
      getConclusao$.subscribe((res) => {
        this.count = res.totalElements;

        this.data = res.content.map((item) => ({
          id: `${item?.id}`,
          capacitacao: `${item?.capacitacaoResponse.nome}`,
          local: `${item?.local}`,
          dtInicio: `${item?.dtInicio}`,
          dtFim: `${item?.dtfim}`,
          pessoa: `${item?.pessoaResponse.nome}`,
        }));

        this.totalPages = Math.ceil(this.count / this.pageSize);
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
    this.conclusaoSearch.reset();
    this.refresh();
  }

  onDelete(id: number): void {
    this.subs$.push(
      this.facade.conclusaoService.remove(id).subscribe(() => {
        this.refresh();
        this.toastService.show({
          message: 'Conclusão deletada com sucesso!',
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
