import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { DetalheBasicoComponent } from './components/detalhe-basico/detalhe-basico.component';

@NgModule({
  declarations: [
    ConsultaComponent,
    CadastroComponent,
    DetalheComponent,
    EdicaoComponent,
    DetalheBasicoComponent,
  ],
  imports: [CommonModule],
})
export class OrganizacaoModule {}
