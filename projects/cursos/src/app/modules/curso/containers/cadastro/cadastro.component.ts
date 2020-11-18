import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursoFacade } from './../../curso.facade';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastService } from 'projects/ensino-commons/src/public-api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit, OnDestroy {
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
    });
  }

  onSubmit(): void {
    if (this.cursoForm.valid) {
      const salvarCurso$ = this.facade.save(this.cursoForm.value);
      this.subs$.push(salvarCurso$);

      salvarCurso$.subscribe((resp) => {
        this.toast.show({
          message: 'O curso foi salvo com sucesso!',
          type: 'success',
        });
        this.router.navigate(['curso', 'listar']);
      });
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
