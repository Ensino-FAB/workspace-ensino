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
import { environment } from '../environments/environment';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

function initializeKeycloak(keycloak: KeycloakService): any {
  return () =>
    keycloak.init({
      config: {
        url: environment.KEYCLOAK_URL,
        realm: environment.KEYCLOAK_REALM,
        clientId: environment.KEYCLOAK_CLIENT_ID,
      },
      initOptions: {
        onLoad: 'login-required',
        silentCheckSsoRedirectUri: environment.KEYCLOAK_REDIRECT_URI,
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
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
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
