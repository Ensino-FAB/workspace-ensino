import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'proposta',
    data: {
      breadcrumb: 'proposta',
    },
    loadChildren: () =>
      import('./modules/proposta/proposta.module').then(
        (m) => m.PropostaConclusaoModule
      ),
  },

  {
    path: 'conclusao',
    loadChildren: () =>
      import('./modules/conclusao/conclusao.module').then(
        (m) => m.ConclusaoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
