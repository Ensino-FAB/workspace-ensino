import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type StepperStatus = 'active' | 'disabled' | 'checked' | 'invalid';

interface StepperStyleMap {
  first: StepperStatus;
  second: StepperStatus;
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
  };

  @Input() step = 1;

  @Output() changed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange(value: number) {
    this.changed.emit(value);
  }
}
