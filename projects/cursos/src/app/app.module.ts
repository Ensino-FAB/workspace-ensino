import { HttpClientModule } from '@angular/common/http';
import { NavModule } from './../../../ensino-commons/src/lib/components/nav/nav.module';
import { SubNavModule } from './../../../ensino-commons/src/lib/components/sub-nav/sub-nav.module';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  IconModule,
  ButtonModule,
  DropmenuModule,
} from '@cca-fab/cca-fab-components-common';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { ToastModule } from 'projects/ensino-commons/src/lib/components/toast/toast.module';
import { ToastService } from 'projects/ensino-commons/src/lib/services/toast.service';

function initializeKeycloak(keycloak: KeycloakService): any {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8084/auth',
        realm: 'FAB',
        clientId: 'ensino-client',
      },
      initOptions: {
        onLoad: 'login-required',
        silentCheckSsoRedirectUri:
          'http://localhost:4200/assets/silent-check-sso.html',
      },
    });
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconModule,
    ButtonModule,
    SubNavModule,
    NavModule,
    DropmenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    KeycloakAngularModule,
    ToastModule,
  ],
  providers: [
    ToastService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
