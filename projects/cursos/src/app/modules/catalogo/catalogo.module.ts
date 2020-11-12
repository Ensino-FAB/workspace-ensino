import { CATALOGO_ROUTES } from './catalogo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoFormComponent } from './components/catalogo-form/catalogo-form.component';
import { CatalogoDetailComponent } from './components/catalogo-detail/catalogo-detail.component';
import { CatalogoSearchComponent } from './components/catalogo-search/catalogo-search.component';
import { CatalogoListComponent } from './components/catalogo-list/catalogo-list.component';
import { CatalogoEditComponent } from './containers/catalogo-edit/catalogo-edit.component';
import { CatalogoIndexComponent } from './containers/catalogo-index/catalogo-index.component';
import { CatalogoShowcaseComponent } from './containers/catalogo-showcase/catalogo-showcase.component';

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
    CatalogoFormComponent,
    CatalogoDetailComponent,
    CatalogoSearchComponent,
    CatalogoListComponent,
    CatalogoEditComponent,
    CatalogoIndexComponent,
    CatalogoShowcaseComponent,
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
})
export class CatalogoModule {}
