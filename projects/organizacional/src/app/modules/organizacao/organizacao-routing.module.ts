import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { CadastroComponent } from './containers/cadastro/cadastro.component';

export const ORGANIZACAO_ROUTES: Routes = [
  { path: '', component: ConsultaComponent, data: { breadcrumb: null } },
  {
    path: 'criar',
    component: CadastroComponent,
    data: { breadcrumb: 'Cadastrar' },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class OrganizacaoRoutingModule {}
