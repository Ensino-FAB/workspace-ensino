import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../../../../../../cursos/src/app/app.animation';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.scss'],
  animations: [fadeIn()],
})
export class GestaoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
