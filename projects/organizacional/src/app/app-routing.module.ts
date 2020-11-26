import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

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
    path: 'pessoa',
    loadChildren: () =>
      import('./modules/pessoa/pessoa.module').then((m) => m.PessoaModule),
  },
  {
    path: 'organizacao',
    loadChildren: () =>
      import('./modules/organizacao/organizacao.module').then(
        (m) => m.OrganizacaoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
