import { Curso } from './../../../../models/curso.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-basico.component.html',
  styleUrls: ['./detalhe-basico.component.scss'],
})
export class DetalheCursoComponent implements OnInit {
  @Input() header: string;
  @Input() curso: Curso;
  @Input() loading: boolean;

  constructor() {}

  ngOnInit(): void {}
}
