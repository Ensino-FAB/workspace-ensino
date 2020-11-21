import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROPOSTA_ROUTES } from './proposta-routing.module';
import { RouterModule } from '@angular/router';

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
  TextareaModule,
  InputModule,
} from '@cca-fab/cca-fab-components-common';
import { PropostaFacade } from './proposta.facade';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { GestaoComponent } from './containers/gestao/gestao.component';
import { DetalheBasicoComponent } from './components/detalhe-basico/detalhe-basico.component';
import { DetalheProcessoComponent } from './containers/detalhe-processo/detalhe-processo.component';
import { BpmnViewerModule } from 'projects/ensino-commons/src/public-api';
import { FluxoProcessoComponent } from './containers/fluxo-processo/fluxo-processo.component';

@NgModule({
  declarations: [
    CadastroComponent,
    ConsultaComponent,
    DetalheComponent,
    EdicaoComponent,
    GestaoComponent,
    DetalheBasicoComponent,
    DetalheProcessoComponent,
    FluxoProcessoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PROPOSTA_ROUTES),
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
    BpmnViewerModule,
  ],
  providers: [PropostaFacade],
})
export class PropostaModule {}
