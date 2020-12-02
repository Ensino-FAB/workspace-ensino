import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableColumn } from '@cca-fab/cca-fab-components-common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { of, Subscription, timer } from 'rxjs';
import { PessoaFacade } from '../../pessoa.facade';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { mapTo, mergeAll, share, takeUntil } from 'rxjs/operators';
import { fadeIn } from '../../../../app.animation';
import { Pessoa } from '../../../../models/pessoa.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  animations: [fadeIn()],
})
export class ConsultaComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  _isLoading = false;
  data: Pessoa[] = [];
  pessoaSearch: FormGroup;
  columns: TableColumn[] = [
    {
      field: 'organizacao',
      title: 'Organização',
      width: '10%',
    },
    {
      field: 'nrCpf',
      title: 'CPF',
      width: '10%',
    },
    {
      field: 'nrOrdem',
      title: 'SARAM',
      width: '10%',
    },
    {
      field: 'siglaQuadro',
      title: 'Quadro',
      width: '10%',
    },
    {
      field: 'siglaPosto',
      title: 'Posto',
      width: '10%',
    },
    {
      field: 'siglaEspecialidade',
      title: 'Especialidade',
      width: '10%',
    },
    {
      field: 'nome',
      title: 'Nome Completo',
      width: '15%',
    },
    {
      field: 'email',
      title: 'Email',
      width: '15%',
    },
  ];
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
    private facade: PessoaFacade,
    private toastService: ToastService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pessoaSearch = this.fb.group({
      nome: new FormControl(''),
      nomeGuerra: new FormControl(''),
      nrCpf: new FormControl(''),
      siglaQuadro: new FormControl(''),
      siglaPosto: new FormControl(''),
      siglaEspecialidade: new FormControl(''),
      situacao: new FormControl(''),
      organizacao: new FormControl(''),
      email: new FormControl(''),
      contatoPrincipal: new FormControl(''),
    });
    this.options = [
      { name: 'Nome Completo', value: 'nome' },
      { name: 'Organização', value: 'organizacao' },
      { name: 'Sexo', value: 'sexo' },
      { name: 'Situação', value: 'situacao' },
    ];
    this.refresh();
  }

  refresh() {
    const search = {
      ...this.pessoaSearch.value,
      page: this.page ? this.page - 1 : 0,
      size: this.pageSize,
      sort: this.orderBy.map((item) => (this.asc ? item : item + ',desc')),
    };

    const getPessoa$ = this.facade.getAllPessoa(search).pipe(share());
    const isLoading$ = of(
      timer(150).pipe(mapTo(true), takeUntil(getPessoa$)),
      getPessoa$.pipe(mapTo(false))
    ).pipe(mergeAll());

    this.subs$.push(
      isLoading$.subscribe((status) => {
        this._isLoading = status;
      }),
      getPessoa$.subscribe((res) => {
        this.data = res.content;
        this.count = res.totalElements;
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
          message: 'Pessoa deletada com sucesso!',
          type: 'success',
        });
      })
    );
  }

  clean() {
    this.pessoaSearch.reset();
    this.refresh();
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
