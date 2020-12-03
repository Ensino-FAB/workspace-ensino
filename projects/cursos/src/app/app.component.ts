import { Component, OnDestroy, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { KeycloakService } from 'keycloak-angular';

import {
  trigger,
  keyframes,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import { UserService } from '../../../ensino-commons/src/lib/services/user.service';
import { Subscription } from 'rxjs';
import moment from 'moment';
import { environment } from 'projects/cursos/src/environments/environment';
import { NavToggleMenu } from 'projects/ensino-commons/src/lib/models/nav-toggle-menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('moduleChanged', [
      transition('* => *', [
        // When the item is changed
        query('.main-header-jet', [animate(0, style({ opacity: 1 }))]),
        animate(
          450,
          keyframes([
            style({ offset: 0.0, transform: 'translateX(-100%)' }),
            style({ offset: 1.0, transform: 'translateX(0%)' }),
          ])
        ),
        query('.main-header-jet', [
          animate(
            300,
            keyframes([
              style({ opacity: 1, offset: 0, transform: 'translateX(0%)' }),
              style({
                opacity: 0.9,
                offset: 0.7,
                transform: 'translateX(245%)',
              }),
              style({
                opacity: 0,
                offset: 1.0,
                transform: 'translateX(350%)',
              }),
            ])
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent implements OnDestroy {
  private _sessionInterval: any;

  tokenDuration: moment.Duration;

  subs$: Subscription[] = [];
  module: string;
  animate = false;
  configNav: NavToggleMenu[] = [
    {
      href: ``,
      title: 'Cursos',
    },
    {
      href: `${environment.ORGANIZACIONAL_HREF}`,
      title: 'Organizacional',
    },
  ];

  constructor(
    private router: Router,
    public keycloak: KeycloakService,
    public userService: UserService
  ) {
    this.subs$.push(
      this.router.events
        .pipe(filter((e) => e instanceof NavigationEnd))
        .subscribe((e: NavigationEnd) => {
          this.animate = e.url !== '/';
          this.module = e.url.split('/')[1];
        })
    );

    this.refreshTokenTime();
  }

  handleLogout(): void {
    this.keycloak.logout().then((res) => {
      console.log(res);
    });
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub$) => sub$.unsubscribe());
    clearInterval(this._sessionInterval);
  }

  handleUserName(): string {
    return this.userService.user?.nome
      .split(' ')
      .map((name) => `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`)
      .join(' ');
  }

  @HostListener('document:click')
  refreshTokenTime(): void {
    if (
      !this.tokenDuration ||
      Math.round(this.tokenDuration.asMinutes()) <= 5
    ) {
      this.keycloak.updateToken(-1).then((refreshed) => {
        if (refreshed) {
          const kc = this.keycloak.getKeycloakInstance();

          moment.locale('pt-br');
          const currentTime = moment().unix();

          const diffTime = kc.tokenParsed.exp + kc.timeSkew - currentTime;
          const interval = 1000;

          this.tokenDuration = moment.duration(diffTime, 's');

          if (diffTime > 0) {
            if (this._sessionInterval) {
              clearInterval(this._sessionInterval);
            }

            this._sessionInterval = setInterval(() => {
              if (this.keycloak.isTokenExpired()) {
                this.handleLogout();
              }

              this.tokenDuration = moment.duration(
                this.tokenDuration.asMilliseconds() - interval,
                'ms'
              );
            }, interval);
          }
        }
      });
    }
  }
}
