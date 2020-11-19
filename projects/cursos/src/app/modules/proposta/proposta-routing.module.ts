import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestaoComponent } from '../proposta/containers/gestao/gestao.component';
import { CadastroComponent } from '../proposta/containers/cadastro/cadastro.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';

const routes: Routes = [
  { path: '', component: GestaoComponent, data: { breadcrumb: null } },
  {
    path: 'criar',
    data: {
      breadcrumb: 'criar',
    },
    component: CadastroComponent,
  },
  { path: 'listar', component: ConsultaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropostaRoutingModule {}
