import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropostaRoutingModule } from './proposta-routing.module';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { GestaoComponent } from './containers/gestao/gestao.component';

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
  TextareaModule,
  TooltipModule,
} from '@cca-fab/cca-fab-components-common';
import { PropostaFacade } from './proposta.facade';

@NgModule({
  declarations: [
    CadastroComponent,
    ConsultaComponent,
    DetalheComponent,
    EdicaoComponent,
    GestaoComponent,
  ],
  imports: [
    CommonModule,
    PropostaRoutingModule,
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
    TextareaModule,
    InputModule,
  ],
  providers: [PropostaFacade],
})
export class PropostaModule {}
