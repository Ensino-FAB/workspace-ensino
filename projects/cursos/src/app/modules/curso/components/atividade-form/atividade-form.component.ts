import { CursoFacade } from './../../curso.facade';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'projects/ensino-commons/src/public-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-atividade-form',
  templateUrl: './atividade-form.component.html',
  styleUrls: ['./atividade-form.component.scss'],
})
export class AtividadeFormComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  atividadeComplementarForm: FormGroup;
  formId: 'atividade-complementar-form';

  constructor(
    private facade: CursoFacade,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.atividadeComplementarForm = new FormGroup({
      descricao: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      cargaHoraria: new FormControl('', Validators.required),
      tipo: new FormControl('ATIVIDADE_COMPLEMENTAR'),
    });
  }

  onSubmit(): void {
    if (this.atividadeComplementarForm.valid) {
      this.subs$.push(
        this.facade
          .save(this.atividadeComplementarForm.value)
          .subscribe((resp) => {
            this.toast.show({
              message: 'A capacitação foi salva com sucesso!',
              type: 'success',
            });
            this.router.navigate(['curso', 'listar']);
          })
      );
    } else {
      this.toast.show({
        message: 'Erro ao tentar salvar!',
        type: 'alert',
      });
    }
  }

  resetForm(): void {
    this.atividadeComplementarForm.reset();
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
