import { Component, Input, OnInit } from '@angular/core';
import { Proposta } from 'projects/cursos-conclusao/src/app/models/proposta.model';
import { fadeIn } from 'projects/ensino-commons/src/public-api';

@Component({
  selector: 'app-detalhe-basico-conclusao',
  templateUrl: './detalhe-basico-conclusao.component.html',
  styleUrls: ['./detalhe-basico-conclusao.component.scss'],
  animations: [fadeIn()],
})
export class DetalheBasicoConclusaoComponent implements OnInit {
  @Input() header: string;
  @Input() proposta: any;
  @Input() loading: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log(this.proposta);
  }
}
