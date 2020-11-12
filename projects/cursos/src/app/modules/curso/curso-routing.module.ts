import { CursoShowcaseComponent } from './containers/curso-showcase/curso-showcase.component';
import { CursoEditComponent } from './containers/curso-edit/curso-edit.component';
import { CursoIndexComponent } from './containers/curso-index/curso-index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const CURSO_ROUTES: Routes = [
  { path: '', component: CursoIndexComponent, data: { breadcrumb: null } },
  {
    path: 'criar',
    data: {
      breadcrumb: 'criar',
    },
    component: CursoEditComponent,
  },
  { path: 'listar', component: CursoShowcaseComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CursoRoutingModule {}
