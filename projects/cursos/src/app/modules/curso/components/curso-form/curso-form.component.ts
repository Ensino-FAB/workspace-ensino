import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'projects/ensino-commons/src/public-api';
import { Subscription } from 'rxjs';
import { CursoFacade } from '../../curso.facade';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss'],
})
export class CursoFormComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  cursoForm: FormGroup;
  formId: 'curso-form';

  constructor(
    private facade: CursoFacade,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cursoForm = new FormGroup({
      codigo: new FormControl('', Validators.required),
      codigoCnpq: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      disciplina: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      objetivo: new FormControl('', Validators.required),
      observacao: new FormControl('', Validators.required),
      preRequisito: new FormControl('', Validators.required),
      cargaHoraria: new FormControl('', Validators.required),
      tipo: new FormControl('CURSO'),
    });
  }

  onSubmit(): void {
    if (this.cursoForm.valid) {
      this.subs$.push(
        this.facade.save(this.cursoForm.value).subscribe((resp) => {
          this.toast.show({
            message: 'A capacitação foi salva com sucesso!',
            type: 'success',
          });
          this.router.navigate(['curso', 'listar']);
        })
      );
    } else {
      this.toast.show({
        message: 'Erro ao tentar salvar o curso!',
        type: 'alert',
      });
    }
  }

  resetForm(): void {
    this.cursoForm.reset();
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
