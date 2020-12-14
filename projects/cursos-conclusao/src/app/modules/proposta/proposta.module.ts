import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './containers/cadastro/cadastro.component';
import { ConsultaComponent } from './containers/consulta/consulta.component';
import { EdicaoComponent } from './containers/edicao/edicao.component';
import { FluxoProcessoComponent } from './containers/fluxo-processo/fluxo-processo.component';
import { GestaoComponent } from './containers/gestao/gestao.component';
import { DetalheProcessoComponent } from './containers/detalhe-processo/detalhe-processo.component';
import { DetalheComponent } from './containers/detalhe/detalhe.component';
import { DetalheBasicoConclusaoComponent } from './components/detalhe-basico-conclusao/detalhe-basico-conclusao.component';

@NgModule({
  declarations: [
    CadastroComponent,
    ConsultaComponent,
    EdicaoComponent,
    FluxoProcessoComponent,
    GestaoComponent,
    DetalheProcessoComponent,
    DetalheComponent,
    DetalheBasicoConclusaoComponent,
  ],
  imports: [CommonModule],
})
export class PropostaModule {}
