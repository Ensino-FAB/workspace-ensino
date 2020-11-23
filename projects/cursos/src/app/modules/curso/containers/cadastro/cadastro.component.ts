import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  fadeIn,
  fadeInOut,
} from '../../../../../../../cursos/src/app/app.animation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  animations: [fadeIn(), fadeInOut()],
})
export class CadastroComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  capacitacaoForm: FormGroup;
  options: object[];
  formType = '';

  constructor() {}

  ngOnInit(): void {
    this.capacitacaoForm = new FormGroup({
      tipo: new FormControl('', Validators.required),
    });

    this.options = [
      { name: 'Curso', value: 'CURSO' },
      { name: 'Atividade Complementar', value: 'ATIVIDADE_COMPLEMENTAR' },
    ];
  }

  resetForm(): void {
    this.capacitacaoForm.reset();
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  handleChange(event: any): void {
    if (event == null) {
      this.formType = '';
    }

    this.formType = event;
  }
}
