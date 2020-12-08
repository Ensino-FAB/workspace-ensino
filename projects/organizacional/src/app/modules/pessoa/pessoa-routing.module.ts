import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';

export const PESSOA_ROUTES: Routes = [
  { path: '', component: ConsultaComponent, data: { breadcrumb: null } },
  { path: 'criar', component: CadastroComponent, data: { breadcrumb: null } },
  {
    path: 'detalhar/:id',
    component: DetalheComponent,
    data: { breadcrumb: null },
  },
  {
    path: 'editar/:id',
    component: CadastroComponent,
    data: { breadcrumb: null },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class PessoaRoutingModule {}
