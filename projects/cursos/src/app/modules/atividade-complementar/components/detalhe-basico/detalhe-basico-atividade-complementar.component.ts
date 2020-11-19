import { Component, Input, OnInit } from '@angular/core';
import { AtividadeComplementar } from '../../../../models/atividade-complementar.model';

@Component({
  selector: 'app-detalhe-basico-atividade-complementar',
  templateUrl: './detalhe-basico-atividade-complementar.component.html',
  styleUrls: ['./detalhe-basico-atividade-complementar.component.scss'],
})
export class DetalheBasicoAtividadeComplementarComponent implements OnInit {
  @Input() header: string;
  @Input() atividadeComplementar: AtividadeComplementar;

  @Input() loading: boolean;
  constructor() {}

  ngOnInit(): void {}
}
