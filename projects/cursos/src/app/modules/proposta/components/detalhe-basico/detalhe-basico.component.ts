import { Proposta } from './../../../../models/proposta.model';
import { Component, Input, OnInit } from '@angular/core';
import { fadeIn } from '../../../../../../../cursos/src/app/app.animation';

@Component({
  selector: 'app-detalhe-proposta',
  templateUrl: './detalhe-basico.component.html',
  styleUrls: ['./detalhe-basico.component.scss'],
  animations: [fadeIn()],
})
export class DetalheBasicoComponent implements OnInit {
  @Input() header: string;
  @Input() proposta: Proposta;

  @Input() loading: boolean;
  constructor() {}

  ngOnInit(): void {}
}
