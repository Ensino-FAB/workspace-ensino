import { CATALOGO_ROUTES } from './catalogo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { GestaoComponent } from './containers/gestao/gestao.component';
import { CatalogoFacade } from './catalogo.facade';
import { DetalheBasicoComponent } from './components/detalhe-basico/detalhe-basico.component';

@NgModule({
  declarations: [
    CadastroComponent,
    ConsultaComponent,
    EdicaoComponent,
    DetalheComponent,
    GestaoComponent,
    DetalheBasicoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CATALOGO_ROUTES),
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
  providers: [CatalogoFacade],
})
export class CatalogoModule {}
