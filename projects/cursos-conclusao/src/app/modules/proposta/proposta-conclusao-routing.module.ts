import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { GestaoComponent } from './containers/gestao/gestao.component';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { DetalheProcessoComponent } from './containers/detalhe-processo/detalhe-processo.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { FluxoProcessoConclusaoComponent } from './containers/fluxo-processo-conclusao/fluxo-processo-conclusao.component';

export const PROPOSTA_CONCLUSAO_ROUTES: Routes = [
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
        path: 'etapa/:taskId',
        component: FluxoProcessoConclusaoComponent,
        data: {
          breadcrumb: 'aprovação de etapa',
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
export class PropostaConclusaoRoutingModuleRoutingModule {}
