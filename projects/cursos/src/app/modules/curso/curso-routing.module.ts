import { GestaoComponent } from './containers/gestao/gestao.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const CURSO_ROUTES: Routes = [
  { path: '', component: GestaoComponent, data: { breadcrumb: null } },
  {
    path: 'criar',
    data: {
      breadcrumb: 'criar',
    },
    component: EdicaoComponent,
  },
  {
    path: 'listar',
    data: {
      breadcrumb: 'consultar',
    },
    component: ConsultaComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CursoRoutingModule {}
