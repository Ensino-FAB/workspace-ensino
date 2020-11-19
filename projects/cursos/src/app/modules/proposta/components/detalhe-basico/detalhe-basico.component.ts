import { Proposta } from './../../../../models/proposta.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-proposta',
  templateUrl: './detalhe-basico.component.html',
  styleUrls: ['./detalhe-basico.component.scss'],
})
export class DetalheBasicoComponent implements OnInit {
  @Input() header: string;
  @Input() proposta: Proposta;

  @Input() loading: boolean;
  constructor() {}

  ngOnInit(): void {}
}
