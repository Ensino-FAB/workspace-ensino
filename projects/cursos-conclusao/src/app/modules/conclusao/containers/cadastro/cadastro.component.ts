import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Conclusao } from '../../../../models/conclusao.model';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  form: FormGroup;

  currentStep = 1;
  statusMap = { first: 'active', second: 'disabled' };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [''],
      dataInicio: [''],
      dataTermino: [''],
      local: [''],
      capacitacaoId: [''],
      pessoas: this.fb.array([]),
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
      setTimeout(() => {
        this.statusMap[CHANGE_MAP[this.currentStep - 1]] = 'checked';
        ++this.currentStep;
        console.log(this.form.value);
      }, 1000);
      //   this.facade
      //     .createFin(FinRequestObject)
      //     .pipe(mergeMap((fin) => this.facade.getFin(fin.id)))
      //     .subscribe((res: Fin) => {
      //       this.createdFin = res;

      //       this.statusMap[CHANGE_MAP[this.currentStep - 1]] = 'checked';
      //       ++this.currentStep;
      //     });
      // });
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
