import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'projects/ensino-commons/src/public-api';
import { Subscription } from 'rxjs';
import { AtividadeComplementarFacade } from '../../atividade-complementar.facade';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss'],
})
export class EdicaoComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  public atividadeComplementarForm: FormGroup;
  public formId: 'atividade-complementar-form';
  private id: number;

  constructor(
    private facade: AtividadeComplementarFacade,
    private toast: ToastService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.atividadeComplementarForm = new FormGroup({
      id: new FormControl(''),
      descricao: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      cargaHoraria: new FormControl('', Validators.required),
    });

    this.subs$.push(
      this.activeRoute.params.subscribe((params) => (this.id = params.id)),
      this.facade
        .findAtividadeComplementar(this.id)
        .subscribe((resp) => this.atividadeComplementarForm.setValue(resp))
    );
  }

  onSubmit(): void {
    if (this.atividadeComplementarForm.valid) {
      this.subs$.push(
        this.facade
          .save(this.atividadeComplementarForm.value)
          .subscribe((resp) => {
            this.toast.show({
              message: 'A atividade complementar foi editada com sucesso!',
              type: 'success',
            });
            this.router.navigate(['atividade-complementar', 'listar']);
          })
      );
    } else {
      this.toast.show({
        message: 'Erro ao tentar editar a atividade complementar!',
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
