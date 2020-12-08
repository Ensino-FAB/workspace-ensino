import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  currentStep = 1;
  statusMap = { first: 'active', second: 'disabled', third: 'disabled' };

  constructor() {}

  ngOnInit(): void {}

  newFin() {
    window.location.reload();
  }
  cleanForm() {}
  onStepperClick(step: number) {
    const CHANGE_MAP = ['first', 'second', 'third'];

    if (this.statusMap[step - 1] !== 'disabled' && this.currentStep < 4) {
      this.currentStep = step;
    }
  }
}
