import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'projects/ensino-commons/src/public-api';
import { Subscription } from 'rxjs';
import { ConclusaoFacade } from '../../conclusao.facade';

@Component({
  selector: 'app-cadastro-step1',
  templateUrl: './cadastro-step1.component.html',
  styleUrls: ['./cadastro-step1.component.scss'],
})
export class CadastroStep1Component implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  capacitacaoOptions = [{ option: 'teste', value: '3' }];

  @Output() next = new EventEmitter();
  @Input() form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastService,
    private router: Router,
    private facade: ConclusaoFacade
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [''],
      dataInicio: [''],
      dataTermino: [''],
      local: [''],
      capacitacaoId: [''],
    });
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
