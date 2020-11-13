import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'curso',
    data: {
      breadcrumb: 'curso',
    },
    loadChildren: () =>
      import('./modules/curso/curso.module').then((m) => m.CursoModule),
  },

  {
    path: 'catalogo',
    data: {
      breadcrumb: 'catalogo',
    },
    loadChildren: () =>
      import('./modules/catalogo/catalogo.module').then(
        (m) => m.CatalogoModule
      ),
  },

  {
    path: 'proposta',
    data: {
      breadcrumb: 'proposta',
    },
    loadChildren: () =>
      import('./modules/proposta/proposta.module').then(
        (m) => m.PropostaModule
      ),
  },

  {
    path: 'atividade-complementar',
    data: {
      breadcrumb: 'atividade-complementar',
    },
    loadChildren: () =>
      import(
        './modules/atividade-complementar/atividade-complementar.module'
      ).then((m) => m.AtividadeComplementarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
