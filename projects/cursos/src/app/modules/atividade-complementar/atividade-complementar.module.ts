import { AtividadeComplementarFacade } from './atividade-complementar.facade';
import { ATIVIDADE_COMPLEMENTAR_ROUTES } from './atividade-complementar-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { RouterModule } from '@angular/router';
import { GestaoComponent } from './containers/gestao/gestao.component';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';

@NgModule({
  declarations: [
    GestaoComponent,
    CadastroComponent,
    ConsultaComponent,
    EdicaoComponent,
    DetalheComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ATIVIDADE_COMPLEMENTAR_ROUTES),
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
  providers: [AtividadeComplementarFacade],
})
export class AtividadeComplementarModule {}
