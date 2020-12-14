import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { TableColumn } from '@cca-fab/cca-fab-components-common';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { mapTo, mergeAll, share, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { PropostaFacade } from '../../proposta.facade';
import { fadeIn } from '../../../../../../../ensino-commons/src/lib/utils/animation';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  animations: [fadeIn()],
})
export class ConsultaComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  public isLoading = false;

  propostaSearch = new FormGroup({
    descricao: new FormControl(''),
    nome: new FormControl(''),
    status: new FormControl(''),
  });

  columns: TableColumn[] = [
    {
      field: 'status',
      title: 'Status',
      width: '10%',
    },
  ];

  data = [];
  loadindMockData = new Array(10).fill({
    descricao: '',
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
    private facade: PropostaFacade,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.options = [{ name: 'Status', value: 'status' }];

    this.optionsStatus = [
      { name: 'Em elaboração', value: 'Em elaboração' },
      { name: 'Aguardando Análise', value: 'Aguardando Análise' },
      { name: 'Aprovado', value: 'Aprovado' },
      { name: 'Reprovado', value: 'Reprovado' },
    ];

    this.refresh();
  }

  // tslint:disable-next-line: typedef
  refresh() {
    const search = {
      ...this.propostaSearch.value,
      page: this.page ? this.page - 1 : 0,
      size: this.pageSize,
      sort: this.orderBy.map((item) => (this.asc ? item : item + ',desc')),
    };

    const getProposta$ = this.facade.getAllProposta(search).pipe(share());
    const isLoading$ = of(
      timer(150).pipe(mapTo(true), takeUntil(getProposta$)),
      getProposta$.pipe(mapTo(false))
    ).pipe(mergeAll());

    this.subs$.push(
      isLoading$.subscribe((status) => {
        this.isLoading = status;
      }),
      getProposta$.subscribe((res) => {
        this.count = res.totalElements;

        this.data = res.content.map((item) => ({
          id: `${item?.id}`,
          status: `${item?.status}`,
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
    this.propostaSearch.reset();
    this.refresh();
  }

  onDelete(id: number): void {
    this.subs$.push(
      this.facade.delete(id).subscribe(() => {
        this.refresh();
        this.toastService.show({
          message: 'Proposta deletada com sucesso!',
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
