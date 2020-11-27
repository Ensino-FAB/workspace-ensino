import { OrganizacaoFacade } from './../../organizacao-facade';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastService } from 'projects/ensino-commons/src/public-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  organizacaoForm: FormGroup;
  formId: 'organizacao-form';

  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastService,
    private router: Router,
    private facade: OrganizacaoFacade
  ) {}

  ngOnInit(): void {
    this.organizacaoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sigla: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pabx: [''],
      homepage: [''],
      extinta: ['N'],
      tipo: ['', Validators.required],
    });
  }

  onSubmit(): void {
    // if (this.organizacaoForm.valid) {
    //   this.subs$.push(
    //     this.facade.(this.organizacaoForm.value).subscribe(() => {
    //       this.toast.show({
    //         message: 'A proposta foi salva com sucesso!',
    //         type: 'success',
    //       });
    //       this.router.navigate(['proposta', 'listar']);
    //     })
    //   );
    // } else {
    //   this.toast.show({
    //     message: 'Erro ao tentar salvar a Proposta!',
    //     type: 'alert',
    //   });
    // }
  }

  resetForm(): void {
    this.organizacaoForm.reset();
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
