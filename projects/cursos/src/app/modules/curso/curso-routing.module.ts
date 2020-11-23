import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { GestaoComponent } from './containers/gestao/gestao.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
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
    path: 'editar/:id',
    data: {
      breadcrumb: 'editar',
    },
    component: EdicaoComponent,
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
