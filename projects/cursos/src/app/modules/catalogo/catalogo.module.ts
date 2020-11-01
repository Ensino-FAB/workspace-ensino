import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoFormComponent } from './components/catalogo-form/catalogo-form.component';
import { CatalogoDetailComponent } from './components/catalogo-detail/catalogo-detail.component';
import { CatalogoSearchComponent } from './components/catalogo-search/catalogo-search.component';
import { CatalogoListComponent } from './components/catalogo-list/catalogo-list.component';
import { CatalogoEditComponent } from './containers/catalogo-edit/catalogo-edit.component';
import { CatalogoIndexComponent } from './containers/catalogo-index/catalogo-index.component';
import { CatalogoShowcaseComponent } from './containers/catalogo-showcase/catalogo-showcase.component';

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
  imports: [CommonModule],
})
export class CatalogoModule {}
