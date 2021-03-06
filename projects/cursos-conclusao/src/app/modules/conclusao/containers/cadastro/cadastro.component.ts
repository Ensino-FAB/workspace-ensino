import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConclusaoCursoRequest } from 'projects/cursos-conclusao/src/app/models/conclusao-curso-request.model';
import { ConclusaoFacade } from '../../conclusao.facade';
import { Router } from '@angular/router';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { fadeIn } from '../../../../../../../ensino-commons/src/lib/utils/animation';
import { ConclusaoCursoResponse } from '../../../../models/conclusao-curso-response.model';
import { mergeMap } from 'rxjs/operators';

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
    private facade: ConclusaoFacade,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      capacitacaoId: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataTermino: ['', Validators.required],
      local: [''],
      pessoas: this.fb.array([], Validators.required),
    });
  }

  newFin() {
    window.location.reload();
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
      const requestBody: ConclusaoCursoRequest = {
        id: 0,
        dtFim: this.form.get('dataTermino').value,
        dtInicio: this.form.get('dataInicio').value,
        local: this.form.get('local').value,
        pessoaList: this.form
          .get('pessoas')
          .value.map((item) => item.pessoa.id),
        capacitacaoId: this.form.get('capacitacaoId').value,
      };
      this.facade.conclusaoService
        .create(requestBody)
        .subscribe((conclusao) => {
          this.toast.show({
            message: 'A Conclusão foi salva com sucesso!',
            type: 'success',
          });
          this.router.navigate(['conclusao']);
        });
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
