import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { Router } from '@angular/router';
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
export class CadastroComponent implements OnInit {
  private subs$: Subscription[] = [];
  pessoaForm: FormGroup;
  formId: 'pessoa-form';
  stepNumber = 1;
  stepTransition = false;
  organizacaoOption: SelectOption[];
  pattern = '[0-9]+';

  constructor(
    private pessoaFacade: PessoaFacade,
    private organizacaoFacade: OrganizacaoFacade,
    private toast: ToastService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pessoaForm = this.fb.group({
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
      contatoPrincipal: ['', [Validators.required, Validators.email]],
      contatoSecundario: [''],
      email: ['', [Validators.required, Validators.email]],
      editavel: ['EDITAVEL'],
      organizacaoId: [''],
      endereco: this.fb.group({
        bairro: [''],
        cep: [''],
        cidade: [''],
        estado: [''],
        pais: [''],
      }),
    });
    const search = {};
    const getOrganizacao$ = this.organizacaoFacade.getAllOrganizacao(search);
    this.subs$.push(
      getOrganizacao$
        .pipe(
          map((response) =>
            response.content.map((organizacao) => ({
              value: organizacao.id,
              name: organizacao.sigla,
            }))
          )
        )
        .subscribe((response) => {
          this.organizacaoOption = response;
        })
    );
  }

  onSubmit(): void {
    console.log(this.pessoaForm.value);
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
      message: 'Todos os campos foram limpados.',
      type: 'success',
    });
    this.pessoaForm.reset();
  }

  stepHandler(step, stepTransition) {
    this.stepNumber = this.stepNumber + step;
    this.stepTransition = stepTransition;
  }
}
