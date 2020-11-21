import { Component, OnDestroy, HostListener } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public keycloak: KeycloakService) {}

  handleLogout(): void {
    this.keycloak.logout().then((res) => {
      console.log(res);
    });
  }
}
