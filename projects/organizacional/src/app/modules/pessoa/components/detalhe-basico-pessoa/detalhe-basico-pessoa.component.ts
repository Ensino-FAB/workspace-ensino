import { Component, Input, OnInit } from '@angular/core';
import { fadeIn } from '../../../../../app/app.animation';
import { Pessoa } from '../../../../models/pessoa.model';

@Component({
  selector: 'app-detalhe-basico-pessoa',
  templateUrl: './detalhe-basico-pessoa.component.html',
  styleUrls: ['./detalhe-basico-pessoa.component.scss'],
  animations: [fadeIn()],
})
export class DetalheBasicoPessoaComponent implements OnInit {
  @Input() header: string;
  @Input() pessoa: Pessoa;

  @Input() loading: boolean;

  constructor() {}

  ngOnInit(): void {}
}
