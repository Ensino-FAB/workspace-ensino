import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { PESSOA_ROUTES } from './pessoa-routing.module';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { PessoaFacade } from './pessoa.facade';
import {
  ButtonModule,
  CardModule,
  FormModule,
  IconModule,
  InputModule,
  LabelModule,
  ModalModule,
  SelectModule,
  TableModule,
  TagModule,
  TooltipModule,
} from '@cca-fab/cca-fab-components-common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrganizacaoFacade } from '../organizacao/organizacao-facade';

@NgModule({
  declarations: [
    ConsultaComponent,
    CadastroComponent,
    DetalheComponent,
    EdicaoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PESSOA_ROUTES),
    ButtonModule,
    IconModule,
    TooltipModule,
    CardModule,
    TableModule,
    ModalModule,
    TagModule,
    LabelModule,
    FormModule,
    ReactiveFormsModule,
    SelectModule,
    InputModule,
  ],
  providers: [PessoaFacade, OrganizacaoFacade],
})
export class PessoaModule {}
