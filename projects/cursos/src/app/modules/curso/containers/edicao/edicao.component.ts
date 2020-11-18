import { Curso } from './../../../../models/curso.model';
import { CursoFacade } from './../../curso.facade';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'projects/ensino-commons/src/public-api';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss'],
})
export class EdicaoComponent implements OnInit {
  private subs$: Subscription[] = [];
  private id: number;
  private isLoading = false;
  cursoForm: FormGroup;
  formId: 'curso-form';

  constructor(
    private route: ActivatedRoute,
    private facade: CursoFacade,
    private toast: ToastService
  ) {}

  curso: Curso;

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.id = params.id;
    //   if (this.id) {
    //     const getCurso$ = this.facade.getCurso(params.id).pipe(share());
    //     const isLoading$ = of(
    //       timer(150).pipe(mapTo(true), takeUntil(getCurso$)),
    //       getCurso$.pipe(mapTo(false))
    //     ).pipe(mergeAll());

    //     this.subs$.push(
    //       isLoading$.subscribe((status) => {
    //         this.isLoading = status;
    //       }),
    //       getCurso$.subscribe((curso) => {
    //         if (curso) {
    //           this.curso = curso;
    //         }
    //       })
    //     );
    //   }
    // });
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
  }

  handleSubmit(value: any): void {
    const salvarCurso$ = this.facade.save(value);
    this.subs$.push(salvarCurso$);

    this.toast.show({
      message: 'O curso foi salvo com sucesso!',
      type: 'error',
    });
  }
}
