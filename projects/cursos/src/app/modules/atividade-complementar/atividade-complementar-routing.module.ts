import { EdicaoComponent } from './containers/edicao/edicao.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { GestaoComponent } from './containers/gestao/gestao.component';
import { CadastroComponent } from './containers/cadastro/cadastro.component';

export const ATIVIDADE_COMPLEMENTAR_ROUTES: Routes = [
  {
    path: '',
    component: GestaoComponent,
    data: { breadcrumb: null },
  },
  {
    path: 'criar',
    data: {
      breadcrumb: 'criar',
    },
    component: CadastroComponent,
  },
  {
    path: 'detalhar/:id',
    data: {
      breadcrumb: 'detalhar',
    },
    component: DetalheComponent,
  },
  {
    path: 'editar/:id',
    data: {
      breadcrumb: 'editar',
    },
    component: EdicaoComponent,
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
export class AtividadeComplementarRoutingModule {}
