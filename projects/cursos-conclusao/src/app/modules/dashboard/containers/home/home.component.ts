import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'projects/ensino-commons/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeIn()],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
