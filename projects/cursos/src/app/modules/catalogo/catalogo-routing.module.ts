import { CatalogoShowcaseComponent } from './containers/catalogo-showcase/catalogo-showcase.component';
import { CatalogoEditComponent } from './containers/catalogo-edit/catalogo-edit.component';
import { CatalogoIndexComponent } from './containers/catalogo-index/catalogo-index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const CATALOGO_ROUTES: Routes = [
  { path: '', component: CatalogoIndexComponent, data: { breadcrumb: null } },
  {
    path: 'criar',
    data: {
      breadcrumb: 'criar',
    },
    component: CatalogoEditComponent,
  },
  { path: 'listar', component: CatalogoShowcaseComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CatalogoRoutingModule {}
