import { Component, Input, OnInit } from '@angular/core';
import { Catalogo } from '../../../../models/catalogo.model';

@Component({
  selector: 'app-detalhe-basico',
  templateUrl: './detalhe-basico.component.html',
  styleUrls: ['./detalhe-basico.component.scss'],
})
export class DetalheBasicoComponent implements OnInit {
  @Input() header: string;
  @Input() catalogo: Catalogo;

  @Input() loading: boolean;
  constructor() {}

  ngOnInit(): void {}
}
