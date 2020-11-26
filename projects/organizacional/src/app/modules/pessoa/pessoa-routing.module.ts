import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ConsultaComponent } from './containers/consulta/consulta.component';

export const PESSOA_ROUTES: Routes = [
  { path: '', component: ConsultaComponent, data: { breadcrumb: null } },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class PessoaRoutingModule {}
