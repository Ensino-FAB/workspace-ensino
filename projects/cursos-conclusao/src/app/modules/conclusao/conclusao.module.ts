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

@NgModule({
  declarations: [CadastroComponent, DetalheComponent],
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
