import { OrganizacaoFacade } from './organizacao-facade';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { RouterModule } from '@angular/router';
import { ORGANIZACAO_ROUTES } from './organizacao-routing.module';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { GestaoComponent } from './containers/gestao/gestao.component';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import {
  TooltipModule,
  CardModule,
  ButtonModule,
  IconModule,
  TableModule,
  ModalModule,
  TagModule,
  LabelModule,
  FormModule,
  SelectModule,
  InputModule,
} from '@cca-fab/cca-fab-components-common';
import { DetalheBasicoComponent } from './components/detalhe-basico/detalhe-basico.component';

@NgModule({
  declarations: [
    ConsultaComponent,
    CadastroComponent,
    DetalheComponent,
    EdicaoComponent,
    GestaoComponent,
    DetalheBasicoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ORGANIZACAO_ROUTES),
    ButtonModule,
    IconModule,
    TooltipModule,
    CardModule,
    TableModule,
    ModalModule,
    TagModule,
    LabelModule,
    FormModule,
    SelectModule,
    InputModule,
  ],
  providers: [OrganizacaoFacade],
})
export class OrganizacaoModule {}
