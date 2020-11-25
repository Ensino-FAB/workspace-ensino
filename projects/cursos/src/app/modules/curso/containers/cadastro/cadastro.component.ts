import { Curso } from './../../../../models/curso.model';
import { CursoFacade } from './../../curso.facade';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import {
  fadeIn,
  fadeInOut,
} from '../../../../../../../cursos/src/app/app.animation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  animations: [fadeIn()],
})
export class CadastroComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  capacitacaoForm: FormGroup;
  options: object[];
  formType = '';
  id: number;
  data: Observable<Curso>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private facade: CursoFacade
  ) {}

  ngOnInit(): void {
    this.capacitacaoForm = new FormGroup({
      tipo: new FormControl('', Validators.required),
    });

    this.options = [
      { name: 'Curso', value: 'CURSO' },
      { name: 'Atividade Complementar', value: 'ATIVIDADE_COMPLEMENTAR' },
    ];
    this.id = this.activatedRoute.snapshot.params['id'];
    this.formType = this.activatedRoute.snapshot.params['type'];
    if (this.id) {
      this.data = this.facade.findCurso(this.id);
    }
  }

  resetForm(): void {
    this.capacitacaoForm.reset();
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  handleChange(event: any): void {
    if (event == null) {
      this.formType = '';
    }

    this.formType = event;
  }
}
