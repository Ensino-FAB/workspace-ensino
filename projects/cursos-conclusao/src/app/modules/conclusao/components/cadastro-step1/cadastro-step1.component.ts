import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'projects/ensino-commons/src/public-api';
import { ConclusaoFacade } from '../../conclusao.facade';

@Component({
  selector: 'app-cadastro-step1',
  templateUrl: './cadastro-step1.component.html',
  styleUrls: ['./cadastro-step1.component.scss'],
})
export class CadastroStep1Component implements OnInit {
  form: FormGroup;

  capacitacaoOptions = [{ label: 'teste', value: '3' }];

  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastService,
    private router: Router,
    private facade: ConclusaoFacade
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataTermino: ['', Validators.required],
      local: ['', Validators.required],
      capacitacaoId: ['', Validators.required],
    });
  }

  onSubmit(): void {}
}
