import { Component, Input, OnInit } from '@angular/core';
import { Organizacao } from '../../../../models/organizacao.model';

@Component({
  selector: 'app-detalhe-basico-organizacao',
  templateUrl: './detalhe-basico-organizacao.component.html',
  styleUrls: ['./detalhe-basico-organizacao.component.scss'],
})
export class DetalheBasicoOrganizacaoComponent implements OnInit {
  @Input() header: string;
  @Input() headerr: string;
  @Input() organizacao: Organizacao;

  @Input() loading: boolean;
  constructor() {}

  ngOnInit(): void {}
}
