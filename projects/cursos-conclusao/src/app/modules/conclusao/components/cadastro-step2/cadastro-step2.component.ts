import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'projects/ensino-commons/src/public-api';
import { Subscription } from 'rxjs';
import { ConclusaoFacade } from '../../conclusao.facade';

@Component({
  selector: 'app-cadastro-step2',
  templateUrl: './cadastro-step2.component.html',
  styleUrls: ['./cadastro-step2.component.scss'],
})
export class CadastroStep2Component implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  capacitacaoOptions = [{ option: 'teste', value: '3' }];

  @Output() next = new EventEmitter();
  @Output() back = new EventEmitter();
  @Input() form: FormArray;

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private router: Router,
    private facade: ConclusaoFacade
  ) {}

  ngOnInit(): void {
    if (this.form.controls.length === 0) {
      this.addFormItem();
    }
  }

  addFormItem(): void {
    const formGroup = this.fb.group({
      pessoaId: ['', Validators.required],
    });
    this.form.push(formGroup);
  }

  removeFormItem(index: number) {
    this.form.removeAt(index);
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
}
