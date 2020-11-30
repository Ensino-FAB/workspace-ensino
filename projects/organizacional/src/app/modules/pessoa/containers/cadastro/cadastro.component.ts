import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { Router } from '@angular/router';
import { PessoaFacade } from '../../pessoa.facade';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { fadeIn } from 'projects/cursos/src/app/app.animation';

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
        style({ opacity: 0, transform: 'translateX(20%)' }),
        animate('500ms 100ms ease-in'),
      ]),
      transition('right => *', [style({ opacity: 1 })]),
      transition('* => left', [
        style({ opacity: 0, transform: 'translateX(-20%)' }),
        animate('500ms 100ms ease-in'),
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

  constructor(
    private facade: PessoaFacade,
    private toast: ToastService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pessoaForm = this.fb.group({
      nome1: this.fb.control(''),
      nome2: this.fb.control(''),
      nome3: this.fb.control(''),
      nome4: this.fb.control(''),
      nome5: this.fb.control(''),
      nome6: this.fb.control(''),
      nome7: this.fb.control(''),
      nome8: this.fb.control(''),
      nome9: this.fb.control(''),
      nome10: this.fb.control(''),
      nome11: this.fb.control(''),
      nome12: this.fb.control(''),
    });
  }

  onSubmit(): void {
    // if (this.pessoaForm.valid) {
    //   const saveCurso$ = this.facade.save(this.pessoaForm.value);
    //   this.subs$.push(saveCurso$);
    //   saveCurso$.subscribe(() => {
    //     this.toast.show({
    //       message: 'A pessoa foi salva com sucesso!',
    //       type: 'success',
    //     });
    //     this.router.navigate(['pessoa', 'listar']);
    //   });
    // }
  }

  resetForm(): void {
    this.pessoaForm.reset();
  }

  stepHandler(step, stepTransition) {
    this.stepNumber = this.stepNumber + step;
    this.stepTransition = stepTransition;
  }
}
