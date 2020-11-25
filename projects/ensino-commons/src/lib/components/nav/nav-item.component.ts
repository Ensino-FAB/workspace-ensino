import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ensino-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @Input() routerLink: any;

  constructor() {}

  ngOnInit(): void {}
}
