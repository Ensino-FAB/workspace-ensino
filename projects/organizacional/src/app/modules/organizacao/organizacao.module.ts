import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { RouterModule } from '@angular/router';
import { ORGANIZACAO_ROUTES } from './organizacao-routing.module';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { GestaoComponent } from './containers/gestao/gestao.component';
import { CadastroComponent } from './containers/cadastro/cadastro.component';

@NgModule({
  declarations: [
    ConsultaComponent,
    CadastroComponent,
    DetalheComponent,
    EdicaoComponent,
    GestaoComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(ORGANIZACAO_ROUTES)],
})
export class OrganizacaoModule {}
