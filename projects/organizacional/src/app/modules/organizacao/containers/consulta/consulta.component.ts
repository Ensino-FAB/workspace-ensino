import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableColumn } from '@cca-fab/cca-fab-components-common';
import { FormControl, FormGroup } from '@angular/forms';
import { of, Subscription, timer } from 'rxjs';
import { OrganizacaoFacade } from '../../organizacao-facade';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { mapTo, mergeAll, share, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
})
export class ConsultaComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  _isLoading = false;

  organizacaoSearch = new FormGroup({
    q: new FormControl(''),
    nome: new FormControl(''),
  });

  columns: TableColumn[] = [
    {
      field: 'nome',
      title: 'Nome',
      width: '10%',
    },
    {
      field: 'sigla',
      title: 'Sigla',
      width: '10%',
    },
    {
      field: 'tipo',
      title: 'Tipo',
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
    private facade: OrganizacaoFacade,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.options = [
      { name: 'Nome', value: 'nome' },
      { name: 'Sigla', value: 'sigla' },
      { name: 'Email', value: 'email' },
    ];

    this.refresh();
  }

  refresh() {
    const search = {
      ...this.organizacaoSearch.value,
      page: this.page ? this.page - 1 : 0,
      size: this.pageSize,
      sort: this.orderBy.map((item) => (this.asc ? item : item + ',desc')),
    };
    const getOrganizacao$ = this.facade.getAllOrganizacao(search).pipe(share());
    const isLoading$ = of(
      timer(150).pipe(mapTo(true), takeUntil(getOrganizacao$)),
      getOrganizacao$.pipe(mapTo(false))
    ).pipe(mergeAll());

    this.subs$.push(
      isLoading$.subscribe((status) => {
        this._isLoading = status;
      }),
      getOrganizacao$.subscribe((res) => {
        this.count = res.totalElements;

        this.data = res.content.map((item) => ({
          id: `${item?.id}`,
          nome: `${item.nome}`,
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

  clean() {
    this.organizacaoSearch.reset();
    this.refresh();
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
