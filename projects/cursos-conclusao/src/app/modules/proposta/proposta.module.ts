import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  AutocompleteModule,
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
import { DetalheProcessoComponent } from './containers/detalhe-processo/detalhe-processo.component';
import { BpmnViewerModule } from 'projects/ensino-commons/src/public-api';
import { PROPOSTA_CONCLUSAO_ROUTES } from './proposta-conclusao-routing.module';
import { DetalheBasicoConclusaoComponent } from './components/detalhe-basico-conclusao/detalhe-basico-conclusao.component';
import { FluxoProcessoConclusaoComponent } from './containers/fluxo-processo-conclusao/fluxo-processo-conclusao.component';
import { AutocompletePessoasComponent } from './components/autocomplete-pessoas/autocomplete-pessoas.component';
import { CadastroStep1Component } from './components/cadastro-step1/cadastro-step1.component';
import { CadastroStep2Component } from './components/cadastro-step2/cadastro-step2.component';
import { CadastroStep3Component } from './components/cadastro-step3/cadastro-step3.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { DetalheConclusaoContainerComponent } from './components/detalhe-conclusao-container/detalhe-conclusao-container.component';
import { ConclusaoFacade } from '../conclusao/conclusao.facade';

@NgModule({
  declarations: [
    CadastroComponent,
    ConsultaComponent,
    DetalheComponent,
    EdicaoComponent,
    GestaoComponent,
    DetalheBasicoConclusaoComponent,
    DetalheProcessoComponent,
    FluxoProcessoConclusaoComponent,
    AutocompletePessoasComponent,
    CadastroStep1Component,
    CadastroStep2Component,
    CadastroStep3Component,
    StepperComponent,
    DetalheConclusaoContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PROPOSTA_CONCLUSAO_ROUTES),
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
    AutocompleteModule,
  ],
  providers: [PropostaFacade, ConclusaoFacade],
})
export class PropostaConclusaoModule {}
