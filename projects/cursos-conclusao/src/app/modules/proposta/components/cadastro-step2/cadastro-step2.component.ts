import { PropostaFacade } from './../../proposta.facade';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import {
  fadeInOut,
  ToastService,
} from 'projects/ensino-commons/src/public-api';
import { Subscription } from 'rxjs';
import { SelectOption } from '../../../conclusao/types/select-option';

@Component({
  selector: 'app-cadastro-step2',
  templateUrl: './cadastro-step2.component.html',
  styleUrls: ['./cadastro-step2.component.scss'],
  animations: [fadeInOut()],
})
export class CadastroStep2Component implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  @Output() next = new EventEmitter();
  @Output() back = new EventEmitter();

  itensOptions: SelectOption[] = [];

  @Input() form: FormArray;

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private router: Router,
    private facade: PropostaFacade
  ) {}

  ngOnInit(): void {
    if (this.form.length === 0) {
      this.addFormItem();
    }
  }

  addFormItem(): void {
    const formGroup = this.fb.group({
      pessoa: ['', Validators.required],
    });
    this.form.push(formGroup);
  }

  removeFormItem(index: number) {
    this.form.removeAt(index);
    if (this.form.controls.length === 0) {
      this.addFormItem();
    }
  }

  onSubmit(): void {}

  onNext() {
    this.next.emit(this.form.value);
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  onConfirmTree(value: SelectOption, i) {
    this.form.controls[i].get('pessoa').setValue(value);
  }

  blurTree(i) {
    if (!this.form.controls[i].get('pessoa').touched) {
      this.form.controls[i].get('pessoa').markAsTouched();
    }
  }

  onChange(value: string) {
    this.facade.pessoaService.findAll({ nome: value }).subscribe(
      (response) =>
        (this.itensOptions = response.content.map((item) => ({
          id: item.id,
          type: 'string', // tipo
          cpf: [item.nrCpf], // vazio
          nome: item.nome,
          organizacao: item.organizacao?.sigla,
        })))
    );
  }
}
