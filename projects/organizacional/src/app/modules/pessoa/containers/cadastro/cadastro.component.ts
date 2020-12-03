import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoaFacade } from '../../pessoa.facade';
import { OrganizacaoFacade } from '../../../organizacao/organizacao-facade';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { fadeIn } from 'projects/cursos/src/app/app.animation';
import { SelectOption } from '@cca-fab/cca-fab-components-common/types/select';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  animations: [
    fadeIn(),
    trigger('stepAnimation', [
      state(
        'left',
        style({
          opacity: 1,
        })
      ),
      state(
        'right',
        style({
          opacity: 1,
        })
      ),
      transition('* => right', [
        style({ opacity: 0, transform: 'translateX(5%)' }),
        animate('300ms 0s ease-in'),
      ]),
      transition('right => *', [style({ opacity: 1 })]),
      transition('* => left', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate('300ms 0s ease-in'),
      ]),
      transition('left => *', [style({ opacity: 1 })]),
    ]),
  ],
})
export class CadastroComponent implements OnInit, OnDestroy, AfterViewChecked {
  id: number;
  private subs$: Subscription[] = [];
  pessoaForm: FormGroup;
  formId: 'pessoa-form';
  stepNumber = 1;
  stepTransition = false;
  organizacaoOption: SelectOption[];
  pattern = '[0-9]+';
  sexoOption: SelectOption[] = [
    {
      value: 'feminino',
      name: 'FEMININO',
    },
    {
      value: 'masculino',
      name: 'MASCULINO',
    },
  ];
  estadoCivilOption: SelectOption[] = [
    {
      value: 'solteiro',
      name: 'SOLTEIRO(A)',
    },
    {
      value: 'casado',
      name: 'CASADO(A)',
    },
    {
      value: 'divorcido',
      name: 'DIVORCIADO(A)',
    },
    {
      value: 'separado_judicialmente',
      name: 'SEPARADO(A) JUDICIALMENTE',
    },
    {
      value: 'desquitado',
      name: 'DESQUITADO(A)',
    },
    {
      value: 'uniao_estavel',
      name: 'UNIÃO ESTÁVEL',
    },
    {
      value: 'viuvo',
      name: 'VIUVO(A)',
    },
  ];
  racaOption: SelectOption[] = [
    { value: 'branca', name: 'BRANCA' },
    { value: 'preta', name: 'PRETA' },
    { value: 'parda', name: 'PARDA' },
    { value: 'indigena', name: 'INDÍGENA' },
    { value: 'amarela', name: 'AMARELA' },
  ];

  constructor(
    private pessoaFacade: PessoaFacade,
    private organizacaoFacade: OrganizacaoFacade,
    private toast: ToastService,
    private fb: FormBuilder,
    private activitedRoute: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const search = {};
    const getOrganizacao$ = this.organizacaoFacade.getAllOrganizacao(search);
    this.subs$.push(
      getOrganizacao$
        .pipe(
          map((response) =>
            response.content.map((organizacao) => ({
              value: String(organizacao.id),
              name: organizacao.sigla,
            }))
          )
        )
        .subscribe((response) => {
          this.organizacaoOption = response;
        })
    );
    this.pessoaForm = this.fb.group({
      id: [''],
      nome: ['', [Validators.required]],
      nomeGuerra: [''],
      nomeQuadro: [''],
      siglaQuadro: [''],
      nomePosto: [''],
      siglaPosto: [''],
      nomeEspecialidade: [''],
      siglaEspecialidade: [''],
      nrCpf: ['', [Validators.pattern(this.pattern)]],
      nrOrdem: [''],
      passaporte: [''],
      identidadeCivil: [''],
      identidadeMilitar: [''],
      dataPraca: [''],
      dataPromocaoAtual: [''],
      raca: [''],
      sexo: ['', [Validators.required]],
      peso: [''],
      estadoCivil: [''],
      altura: [''],
      dataNascimento: ['', [Validators.required]],
      contatoPrincipal: ['', [Validators.required]],
      contatoSecundario: [''],
      email: ['', [Validators.required, Validators.email]],
      editavel: ['EDITAVEL'],
      organizacaoId: [''],
      organizacao: [''],
      endereco: this.fb.group({
        bairro: [''],
        cep: [''],
        cidade: [''],
        estado: [''],
        pais: [''],
      }),
    });
    this.id = this.activitedRoute.snapshot.params['id'];
    if (this.id) {
      const getPessoa$ = this.pessoaFacade.findPessoa(this.id);
      this.subs$.push(
        getPessoa$.subscribe((response) => {
          this.pessoaForm.patchValue({
            ...response,
            organizacaoId: response.organizacao
              ? String(response.organizacao.id)
              : '',
          });
        })
      );
    }
  }

  ngAfterViewChecked(): void {
    const organizacaoId = this.pessoaForm.get('organizacaoId').value;
    this.pessoaForm.get('organizacaoId').setValue(organizacaoId);
    const sexo = this.pessoaForm.get('sexo').value;
    this.pessoaForm.get('sexo').setValue(sexo);
    const raca = this.pessoaForm.get('raca').value;
    this.pessoaForm.get('raca').setValue(raca);
    const estadoCivil = this.pessoaForm.get('estadoCivil').value;
    this.pessoaForm.get('estadoCivil').setValue(estadoCivil);
    this.cdr.detectChanges();
  }

  onSubmit(): void {
    if (this.pessoaForm.valid) {
      const saveCurso$ = this.pessoaFacade.save(this.pessoaForm.value);
      this.subs$.push(saveCurso$);
      saveCurso$.subscribe(() => {
        this.toast.show({
          message: 'A pessoa foi salva com sucesso!',
          type: 'success',
        });
        this.router.navigate(['pessoa']);
      });
    }
  }

  resetForm(): void {
    this.toast.show({
      message: 'Todos os campos foram limpos.',
      type: 'success',
    });
    this.pessoaForm.reset();
  }

  stepHandler(step, stepTransition) {
    this.stepNumber = this.stepNumber + step;
    this.stepTransition = stepTransition;
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub$) => sub$.unsubscribe);
  }
}
