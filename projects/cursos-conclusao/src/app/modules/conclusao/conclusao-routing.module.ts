import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';

export const CONCLUSAO_ROUTES: Routes = [
  { path: '', component: ConsultaComponent, data: { breadcrumb: null } },
  {
    path: 'cadastro',
    data: {
      breadcrumb: 'cadastro',
    },
    component: CadastroComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class PessoaRoutingModule {}
