import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../../../../../ensino-commons/src/lib/services/toast.service';
import { Router } from '@angular/router';
import { CatalogoFacade } from '../../catalogo.facade';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  private subs$: Subscription[] = [];
  catalogoForm: FormGroup;
  formId: 'catalogo-form';

  constructor(
    private facade: CatalogoFacade,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.catalogoForm = new FormGroup({
      descricao: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.catalogoForm.valid) {
      const salvarCurso$ = this.facade.save(this.catalogoForm.value);
      this.subs$.push(salvarCurso$);

      salvarCurso$.subscribe((resp) => {
        this.toast.show({
          message: 'O Catálogo foi salvo com sucesso!',
          type: 'success',
        });
        this.router.navigate(['catalogo', 'listar']);
      });
    } else {
      this.toast.show({
        message: 'Erro ao tentar salvar!',
        type: 'alert',
      });
    }
  }

  resetForm(): void {
    this.catalogoForm.reset();
  }
}
