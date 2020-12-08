import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type StepperStatus = 'active' | 'disabled' | 'checked' | 'invalid';

interface StepperStyleMap {
  first: StepperStatus;
  second: StepperStatus;
  third: StepperStatus;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Input() map: StepperStyleMap = {
    first: 'active',
    second: 'disabled',
    third: 'disabled',
  };

  @Input() step = 1;

  @Output() changed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange(value: number) {
    // if (this.map[value] === 'disabled') {
    //   return;
    // }

    this.changed.emit(value);
  }
}
