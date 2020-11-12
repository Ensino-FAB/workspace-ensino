import { CURSO_ROUTES } from './curso-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { CursoDetailComponent } from './components/curso-detail/curso-detail.component';
import { CursoSearchComponent } from './components/curso-search/curso-search.component';
import { CursoIndexComponent } from './containers/curso-index/curso-index.component';
import { CursoShowcaseComponent } from './containers/curso-showcase/curso-showcase.component';
import { CursoEditComponent } from './containers/curso-edit/curso-edit.component';
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

@NgModule({
  declarations: [
    CursoListComponent,
    CursoFormComponent,
    CursoDetailComponent,
    CursoSearchComponent,
    CursoIndexComponent,
    CursoShowcaseComponent,
    CursoEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CURSO_ROUTES),
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
export class CursoModule {}
