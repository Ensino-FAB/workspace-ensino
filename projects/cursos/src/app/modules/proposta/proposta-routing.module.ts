import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { CommonModule } from '@angular/common';
import { GestaoComponent } from './containers/gestao/gestao.component';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { DetalheProcessoComponent } from './containers/detalhe-processo/detalhe-processo.component';
import { FluxoProcessoComponent } from './containers/fluxo-processo/fluxo-processo.component';

export const PROPOSTA_ROUTES: Routes = [
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
    path: 'etapa/:taskId',
    component: FluxoProcessoComponent,
    data: {
      breadcrumb: 'aprovação de etapa',
    },
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
      breadcrumb: 'detalhes',
    },
    children: [
      {
        path: '',
        component: DetalheComponent,
        data: {
          breadcrumb: null,
        },
      },
      {
        path: 'processo/:rev',
        component: DetalheProcessoComponent,
        data: {
          breadcrumb: 'processo',
        },
      },
    ],
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
export class PropostaRoutingModule {}
