import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { GestaoComponent } from './containers/gestao/gestao.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
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
  { path: 'listar', component: DetalheComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AtividadeComplementarRoutingModule {}
