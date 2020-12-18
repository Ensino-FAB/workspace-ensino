import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { ConclusaoFacade } from '../../conclusao.facade';
import { fadeIn } from '../../../../../../../ensino-commons/src/lib/utils/animation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss'],
  animations: [fadeIn()],
})
export class EdicaoComponent implements OnInit, OnDestroy {
  conclusaoForm: FormGroup;
  private subs$: Subscription[] = [];
  private id: number;
  formId: 'conclusao-form';

  constructor(
    private fb: FormBuilder,
    private facade: ConclusaoFacade,
    private router: Router,
    private toast: ToastService,
    private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.conclusaoForm = this.formBuilder.group({
      id: ['', Validators.required],
      dtFim: ['', Validators.required],
      dtInicio: ['', Validators.required],
      local: ['', Validators.required],
    });

    this.subs$.push(
      this.activeRoute.params.subscribe((params) => (this.id = params.id)),
      this.facade.conclusaoService
        .find(this.id)
        .subscribe((resp) => this.conclusaoForm.setValue(resp))
    );
  }

  onSubmit(): void {
    if (this.conclusaoForm.valid) {
      this.subs$.push(
        this.facade.conclusaoService
          .update(this.conclusaoForm.value)
          .subscribe(() => {
            this.toast.show({
              message: 'A conclusão foi editada com sucesso!',
              type: 'success',
            });
            this.router.navigate(['conclusao']);
          })
      );
    } else {
      this.toast.show({
        message: 'Erro ao tentar editar a Conclusão!',
        type: 'alert',
      });
    }
  }

  resetForm(): void {
    this.conclusaoForm.reset();
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
