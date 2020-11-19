import { GestaoComponent } from './containers/gestao/gestao.component';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';

export const CATALOGO_ROUTES: Routes = [
  { path: '', component: GestaoComponent, data: { breadcrumb: null } },
  {
    path: 'criar',
    data: {
      breadcrumb: 'criar',
    },
    component: CadastroComponent,
  },

  {
    path: 'detalhes/:id',
    data: {
      breadcrumb: 'detalhar',
    },
    component: DetalheComponent,
  },

  { path: 'listar', component: ConsultaComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CatalogoRoutingModule {}
