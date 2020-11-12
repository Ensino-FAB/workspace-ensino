import { AtividadeComplementarShowcaseComponent } from './containers/atividade-complementar-showcase/atividade-complementar-showcase.component';
import { AtividadeComplementarIndexComponent } from './containers/atividade-complementar-index/atividade-complementar-index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AtividadeComplementarEditComponent } from './containers/atividade-complementar-edit/atividade-complementar-edit.component';

export const ATIVIDADE_COMPLEMENTAR_ROUTES: Routes = [
  {
    path: '',
    component: AtividadeComplementarIndexComponent,
    data: { breadcrumb: null },
  },
  {
    path: 'criar',
    data: {
      breadcrumb: 'criar',
    },
    component: AtividadeComplementarEditComponent,
  },
  { path: 'listar', component: AtividadeComplementarShowcaseComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AtividadeComplementarRoutingModule {}
