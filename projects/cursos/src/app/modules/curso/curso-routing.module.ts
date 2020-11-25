import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CadastroComponent } from './containers/cadastro/cadastro.component';

export const CURSO_ROUTES: Routes = [
  { path: '', component: ConsultaComponent, data: { breadcrumb: null } },
  {
    path: 'criar',
    data: {
      breadcrumb: 'criar',
    },
    component: CadastroComponent,
  },
  {
    path: 'editar/:id/tipo/:type',
    data: {
      breadcrumb: 'editar',
    },
    component: CadastroComponent,
  },
  {
    path: 'detalhes/:id',
    data: {
      breadcrumb: 'detalhar',
    },
    component: DetalheComponent,
  },
  {
    path: 'listar',
    data: {
      breadcrumb: 'listar',
    },
    component: ConsultaComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CursoRoutingModule {}
