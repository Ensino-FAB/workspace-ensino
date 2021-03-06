import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { Router } from '@angular/router';
import { PropostaFacade } from '../../proposta.facade';
import { fadeIn } from '../../../../../../../cursos/src/app/app.animation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  animations: [fadeIn()],
})
export class CadastroComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  propostaForm: FormGroup;
  formId: 'proposta-form';

  constructor(
    private facade: PropostaFacade,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.propostaForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      codigoCnpq: new FormControl('', Validators.required),
      disciplina: new FormControl(''),
      objetivo: new FormControl(''),
      observacao: new FormControl(''),
      preRequisito: new FormControl(''),
      cargaHoraria: new FormControl(''),
    });
  }

  onSubmit(): void {
    if (this.propostaForm.valid) {
      this.subs$.push(
        this.facade.save(this.propostaForm.value).subscribe(() => {
          this.toast.show({
            message: 'A proposta foi salva com sucesso!',
            type: 'success',
          });
          this.router.navigate(['proposta', 'listar']);
        })
      );
    } else {
      this.toast.show({
        message: 'Erro ao tentar salvar a Proposta!',
        type: 'alert',
      });
    }
  }

  resetForm(): void {
    this.propostaForm.reset();
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
