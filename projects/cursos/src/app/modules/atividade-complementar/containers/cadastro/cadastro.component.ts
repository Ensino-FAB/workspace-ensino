import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { Router } from '@angular/router';
import { AtividadeComplementarFacade } from '../../atividade-complementar.facade';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  private subs$: Subscription[] = [];
  atividadeComplementarForm: FormGroup;
  formId: 'atividade-complementar-form';

  constructor(
    private facade: AtividadeComplementarFacade,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.atividadeComplementarForm = new FormGroup({
      descricao: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      cargaHoraria: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.atividadeComplementarForm.valid) {
      const salvarCurso$ = this.facade.save(
        this.atividadeComplementarForm.value
      );
      this.subs$.push(salvarCurso$);

      salvarCurso$.subscribe((resp) => {
        this.toast.show({
          message: 'A atividade complementar foi salva com sucesso!',
          type: 'success',
        });
        this.router.navigate(['atividade-complementar', 'listar']);
      });
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
}
