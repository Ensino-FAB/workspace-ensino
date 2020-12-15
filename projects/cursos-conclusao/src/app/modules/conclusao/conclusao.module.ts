import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONCLUSAO_ROUTES } from './conclusao-routing.module';
import { RouterModule } from '@angular/router';
import { ConclusaoFacade } from './conclusao.facade';
import {
  AccordionModule,
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
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { CadastroStep1Component } from './components/cadastro-step1/cadastro-step1.component';
import { CadastroStep2Component } from './components/cadastro-step2/cadastro-step2.component';
import { CadastroStep3Component } from './components/cadastro-step3/cadastro-step3.component';
import { AutocompletePessoasComponent } from './components/autocomplete-pessoas/autocomplete-pessoas.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';

@NgModule({
  declarations: [
    CadastroComponent,
    DetalheComponent,
    ConsultaComponent,
    StepperComponent,
    CadastroStep1Component,
    CadastroStep2Component,
    CadastroStep3Component,
    AutocompletePessoasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CONCLUSAO_ROUTES),
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
    AccordionModule,
  ],
  providers: [ConclusaoFacade],
})
export class ConclusaoModule {}
