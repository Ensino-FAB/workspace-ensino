import { ATIVIDADE_COMPLEMENTAR_ROUTES } from './atividade-complementar-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtividadeComplementarSearchComponent } from './components/atividade-complementar-search/atividade-complementar-search.component';
import { AtividadeComplementarListComponent } from './components/atividade-complementar-list/atividade-complementar-list.component';
import { AtividadeComplementarFormComponent } from './components/atividade-complementar-form/atividade-complementar-form.component';
import { AtividadeComplementarDetailComponent } from './components/atividade-complementar-detail/atividade-complementar-detail.component';
import { AtividadeComplementarEditComponent } from './containers/atividade-complementar-edit/atividade-complementar-edit.component';
import { AtividadeComplementarIndexComponent } from './containers/atividade-complementar-index/atividade-complementar-index.component';
import { AtividadeComplementarShowcaseComponent } from './containers/atividade-complementar-showcase/atividade-complementar-showcase.component';

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

@NgModule({
  declarations: [
    AtividadeComplementarSearchComponent,
    AtividadeComplementarListComponent,
    AtividadeComplementarFormComponent,
    AtividadeComplementarDetailComponent,
    AtividadeComplementarEditComponent,
    AtividadeComplementarIndexComponent,
    AtividadeComplementarShowcaseComponent,
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
})
export class AtividadeComplementarModule {}
