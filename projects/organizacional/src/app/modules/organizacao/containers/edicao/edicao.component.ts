import { SelectOption } from '@cca-fab/cca-fab-components-common/types/select';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'projects/ensino-commons/src/public-api';
import { fadeIn } from 'projects/organizacional/src/app/app.animation';
import { Subscription } from 'rxjs';
import { OrganizacaoFacade } from '../../organizacao-facade';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss'],
  animations: [fadeIn()],
})
export class EdicaoComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  organizacaoForm: FormGroup;
  formId: 'organizacao-form';
  private id: number;
  options: SelectOption[];

  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private facade: OrganizacaoFacade
  ) {}

  ngOnInit(): void {
    this.organizacaoForm = this.formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      sigla: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pabx: [''],
      homepage: [''],
      extinta: ['N'],
      tipo: ['ORGANIZACAO_EXTERNA'],
      editavel: ['EDITAVEL'],
      cdOrg: [''],
    });

    this.subs$.push(
      this.activeRoute.params.subscribe((params) => (this.id = params.id)),
      this.facade.findOrganizacao(this.id).subscribe((resp) => {
        this.organizacaoForm.patchValue({
          ...resp,
          tipo: resp.tipo.tipo,
        });
      })
    );
  }

  onSubmit(): void {
    if (this.organizacaoForm.valid) {
      this.subs$.push(
        this.facade.save(this.organizacaoForm.value).subscribe(() => {
          this.toast.show({
            message: 'A organizacao foi editada com sucesso!',
            type: 'success',
          });
          this.router.navigate(['organizacao']);
        })
      );
    } else {
      this.toast.show({
        message: 'Erro ao tentar editar a organizacao!',
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
