import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { RouterModule } from '@angular/router';
import { ORGANIZACAO_ROUTES } from './organizacao-routing.module';

@NgModule({
  declarations: [ConsultaComponent],
  imports: [CommonModule, RouterModule.forChild(ORGANIZACAO_ROUTES)],
})
export class OrganizacaoModule {}
