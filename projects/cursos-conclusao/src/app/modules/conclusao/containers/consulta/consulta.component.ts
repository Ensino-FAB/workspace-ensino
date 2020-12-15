import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'projects/ensino-commons/src/public-api';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  animations: [fadeIn()],
})
export class ConsultaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
