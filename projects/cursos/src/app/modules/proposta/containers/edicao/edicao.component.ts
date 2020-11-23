import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'projects/ensino-commons/src/public-api';
import { PropostaFacade } from '../../proposta.facade';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss'],
})
export class EdicaoComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  private id: number;
  propostaForm: FormGroup;
  formId: 'proposta-form';

  constructor(
    private router: Router,
    private facade: PropostaFacade,
    private toast: ToastService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.propostaForm = new FormGroup({
      id: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      codigoCnpq: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      disciplina: new FormControl(''),
      objetivo: new FormControl(''),
      observacao: new FormControl(''),
      preRequisito: new FormControl(''),
      cargaHoraria: new FormControl(''),
      instanciaProcessoId: new FormControl(''),
      status: new FormControl(''),
    });

    this.subs$.push(
      this.activeRoute.params.subscribe((params) => (this.id = params.id)),
      this.facade
        .findProposta(this.id)
        .subscribe((resp) => this.propostaForm.setValue(resp))
    );
  }

  onSubmit(): void {
    if (this.propostaForm.valid) {
      this.subs$.push(
        this.facade.save(this.propostaForm.value).subscribe(() => {
          this.toast.show({
            message: 'a proposta foi editada com sucesso!',
            type: 'success',
          });
          this.router.navigate(['proposta', 'listar']);
        })
      );
    } else {
      this.toast.show({
        message: 'Erro ao tentar editar a proposta!',
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
