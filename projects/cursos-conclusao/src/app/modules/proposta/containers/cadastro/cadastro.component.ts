import { PropostaFacade } from '../../../proposta/proposta.facade';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConclusaoCursoResponse } from './../../../../models/conclusao-curso-response.model';
import { PropostaRequest } from 'projects/cursos-conclusao/src/app/models/proposta.model';
import { ToastService, fadeIn } from 'projects/ensino-commons/src/public-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  animations: [fadeIn()],
})
export class CadastroComponent implements OnInit {
  form: FormGroup;

  currentStep = 1;
  statusMap = { first: 'active', second: 'disabled' };

  constructor(
    private fb: FormBuilder,
    private facade: PropostaFacade,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      dataInicio: [''],
      dtFim: [''],
      local: [''],
      capacitacaoId: [''],
      pessoas: this.fb.array([]),
    });
  }

  cleanForm() {}

  onStepperClick(step: number) {
    const keys = Object.keys(this.statusMap);

    if (keys[step - 1] !== 'disabled' && this.currentStep < 3) {
      this.currentStep = step;
    }
  }

  nextStep() {
    window.scroll({
      behavior: 'smooth',
      top: 0,
    });

    const CHANGE_MAP = ['first', 'second'];

    if (this.currentStep < 2) {
      this.statusMap[CHANGE_MAP[this.currentStep - 1]] = 'checked';
      ++this.currentStep;
    } else if (this.currentStep === 2) {
      const requestBody: PropostaRequest = {
        id: 0,
        dtFim: this.form.get('dtFim').value,
        dtInicio: this.form.get('dataInicio').value,
        local: this.form.get('local').value,
        itens: this.form.get('pessoas').value.map((item) => {
          return { pessoaId: item.pessoa.id };
        }),
        capacitacaoId: this.form.get('capacitacaoId').value,
      };
      this.facade.save(requestBody).subscribe((res: ConclusaoCursoResponse) => {
        this.toast.show({
          message: 'A Proposta foi salva com sucesso!',
          type: 'success',
        });
        this.router.navigate(['proposta']);
      });
    }

    if (this.currentStep < 3) {
      this.statusMap[CHANGE_MAP[this.currentStep - 1]] = 'active';
    }
  }
  previousStep() {
    window.scroll({
      behavior: 'smooth',
      top: 0,
    });

    --this.currentStep;
  }
}
