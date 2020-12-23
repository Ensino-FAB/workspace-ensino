import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { TableColumn } from '@cca-fab/cca-fab-components-common';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { mapTo, mergeAll, share, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { PropostaFacade } from '../../proposta.facade';
import { fadeIn } from '../../../../../../../ensino-commons/src/lib/utils/animation';
import { SelectOption } from '@cca-fab/cca-fab-components-common/types/select';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  animations: [fadeIn()],
})
export class ConsultaComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  pessoaOptions: SelectOption[] = [];

  capacitacaoOptions: SelectOption[] = [];

  public isLoading = false;

  propostaSearch = new FormGroup({
    pessoaId: new FormControl(''),
    capacitacaoId: new FormControl(''),
    status: new FormControl(''),
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
      width: '10%',
    },
    {
      field: 'dtFim',
      title: 'Data de Término',
      width: '10%',
    },

    {
      field: 'status',
      title: 'Status',
      width: '15%',
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
    private facade: PropostaFacade,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.options = [{ name: 'Status', value: 'status' }];

    this.optionsStatus = [
      { name: 'Em elaboração', value: 'Em elaboração' },
      { name: 'Aguardando Análise', value: 'Aguardando Análise' },
      { name: 'Aprovada', value: 'Aprovada' },
      { name: 'Reprovado', value: 'Reprovado' },
    ];

    this.findPessoas();
    this.findCapacitacao();
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
          capacitacao: `${item?.capacitacao.nome}`,
          local: `${item?.local}`,
          dtInicio: `${item?.dtInicio}`,
          dtFim: `${item?.dtFim}`,
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

  confirmed(event): void {}

  filter(event): void {
    const pessoaNome: string = event;

    if (pessoaNome.length > 3) {
      this.findPessoas({ nome: pessoaNome });
    }
  }

  filterCapacitacao(event): void {
    const capacitacaoNome: string = event;

    if (capacitacaoNome.length > 3) {
      this.findCapacitacao({ nome: capacitacaoNome });
    }
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

  findPessoas(search = {}): void {
    this.pessoaOptions = [];
    this.subs$.push(
      this.facade.pessoaService.findAll(search).subscribe((response) => {
        response.content.map((pessoa) => {
          this.pessoaOptions.push({
            name: pessoa.nome,
            value: pessoa.id,
          });
        });
      })
    );
  }

  findCapacitacao(search = {}): void {
    this.capacitacaoOptions = [];
    this.subs$.push(
      this.facade.capacitacaoService.findAll(search).subscribe((response) => {
        response.content.map((capacitacao) => {
          this.capacitacaoOptions.push({
            name: capacitacao.codigo + ' - ' + capacitacao.nome,
            value: capacitacao.id,
          });
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
