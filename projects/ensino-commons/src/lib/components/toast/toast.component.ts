import { Component, OnInit } from '@angular/core';
import { ToastData } from '../../models/toast-data.model';
import { ToastRef } from '../../models/toast-ref.model';
import { handleToastScreenTime } from '../../utils/helpers';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'ensino-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        animate(
          200,
          keyframes([
            style({
              offset: 0.0,
              opacity: 0.2,
              transformOrigin: '50% 0%',
              transform: 'translateY(10%)',
            }),
            style({
              offset: 1.0,
              opacity: 1,
              transform: 'translateY(0)',
            }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          350,
          keyframes([
            style({ offset: 0, opacity: 1 }),
            style({ offset: 1, opacity: 0.2, transform: 'translatex(20%)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  inView = true;

  constructor(readonly data: ToastData, readonly ref: ToastRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.close();
    }, handleToastScreenTime(this.data.message.length));
  }

  close(): void {
    this.inView = false;

    setTimeout(() => {
      this.ref.close();
    }, 250);
  }
}
