import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
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
    path: 'editar/:id/tipo/:type',
    data: {
      breadcrumb: 'editar',
    },
    component: CadastroComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class OrganizacaoRoutingModule {}
