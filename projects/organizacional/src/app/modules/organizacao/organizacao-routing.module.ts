import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';

export const ORGANIZACAO_ROUTES: Routes = [
  { path: '', component: ConsultaComponent, data: { breadcrumb: null } },
  {
    path: 'criar',
    component: CadastroComponent,
    data: { breadcrumb: 'Cadastrar' },
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
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class OrganizacaoRoutingModule {}
