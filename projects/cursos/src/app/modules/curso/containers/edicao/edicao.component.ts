import { Curso } from './../../../../models/curso.model';
import { CursoFacade } from './../../curso.facade';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../../../../ensino-commons/src/public-api';
import { fadeIn } from '../../../../../../../cursos/src/app/app.animation';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss'],
  animations: [fadeIn()],
})
export class EdicaoComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  private id: number;
  private isLoading = false;
  cursoForm: FormGroup;
  formId: 'curso-form';

  constructor(
    private router: Router,
    private facade: CursoFacade,
    private toast: ToastService,
    private activeRoute: ActivatedRoute
  ) {}

  curso: Curso;

  ngOnInit(): void {
    this.cursoForm = new FormGroup({
      id: new FormControl(''),
      codigo: new FormControl(''),
      codigoCnpq: new FormControl(''),
      descricao: new FormControl(''),
      disciplina: new FormControl(''),
      nome: new FormControl(''),
      objetivo: new FormControl(''),
      observacao: new FormControl(''),
      preRequisito: new FormControl(''),
      cargaHoraria: new FormControl(''),
    });

    this.subs$.push(
      this.activeRoute.params.subscribe((params) => (this.id = params.id)),
      this.facade
        .findCurso(this.id)
        .subscribe((resp) => this.cursoForm.setValue(resp))
    );
  }

  onSubmit(): void {
    if (this.cursoForm.valid) {
      this.subs$.push(
        this.facade.save(this.cursoForm.value).subscribe((resp) => {
          this.toast.show({
            message: 'O curso foi editado com sucesso!',
            type: 'success',
          });
          this.router.navigate(['curso', 'listar']);
        })
      );
    } else {
      this.toast.show({
        message: 'Erro ao tentar editar o curso!',
        type: 'alert',
      });
    }
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
