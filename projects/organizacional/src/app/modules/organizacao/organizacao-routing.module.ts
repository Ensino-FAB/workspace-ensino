import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';

export const ORGANIZACAO_ROUTES: Routes = [
  { path: '', component: ConsultaComponent, data: { breadcrumb: null } },
  {
    path: 'criar',
    component: CadastroComponent,
    data: { breadcrumb: 'Cadastrar' },
  },

  {
    path: 'detalhar',
    component: DetalheComponent,
    data: { breadcrumb: 'Detalhar' },
  },

  {
    path: 'editar',
    component: EdicaoComponent,
    data: { breadcrumb: 'Editar' },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class OrganizacaoRoutingModule {}
