import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { PESSOA_ROUTES } from './pessoa-routing.module';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';

@NgModule({
  declarations: [
    ConsultaComponent,
    CadastroComponent,
    DetalheComponent,
    EdicaoComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(PESSOA_ROUTES)],
})
export class PessoaModule {}
