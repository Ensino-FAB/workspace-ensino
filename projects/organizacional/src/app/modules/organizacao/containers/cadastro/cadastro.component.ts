import { fadeIn } from 'projects/cursos/src/app/app.animation';
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
  animations: [fadeIn()],
})
export class CadastroComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  organizacaoForm: FormGroup;
  formId: 'organizacao-form';
  options: object[];

  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastService,
    private router: Router,
    private facade: OrganizacaoFacade
  ) {}

  ngOnInit(): void {
    this.options = [
      { name: 'Organização externa', value: 'ORGANIZACAO_EXTERNA' },
      { name: 'SIGPES', value: 'ORGANIZACAO_SIGPES' },
    ];

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
    if (this.organizacaoForm.valid) {
      this.subs$.push(
        this.facade.save(this.organizacaoForm.value).subscribe(() => {
          this.toast.show({
            message: 'A organizacao foi salva com sucesso!',
            type: 'success',
          });
          this.router.navigate(['organizacao']);
        })
      );
    } else {
      this.toast.show({
        message: 'Erro ao tentar salvar a organizacao!',
        type: 'alert',
      });
    }
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
