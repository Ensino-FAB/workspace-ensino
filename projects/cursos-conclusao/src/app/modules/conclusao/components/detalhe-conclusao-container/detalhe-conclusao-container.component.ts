import { Component, Input, OnInit } from '@angular/core';
import { ConclusaoCursoResponse } from '../../../../models/conclusao-curso-response.model';

@Component({
  selector: 'app-detalhe-conclusao-container',
  templateUrl: './detalhe-conclusao-container.component.html',
  styleUrls: ['./detalhe-conclusao-container.component.scss'],
})
export class DetalheConclusaoContainerComponent implements OnInit {
  @Input() header: string;
  @Input() conclusao: ConclusaoCursoResponse;
  @Input() loading: boolean;

  constructor() {}

  ngOnInit(): void {}
}
