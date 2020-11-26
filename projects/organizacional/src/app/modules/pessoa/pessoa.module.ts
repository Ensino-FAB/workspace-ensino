import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { PESSOA_ROUTES } from './pessoa-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ConsultaComponent],
  imports: [CommonModule, RouterModule.forChild(PESSOA_ROUTES)],
})
export class PessoaModule {}
