import { HttpClientModule } from '@angular/common/http';
import { NavModule } from './../../../ensino-commons/src/lib/components/nav/nav.module';
import { SubNavModule } from './../../../ensino-commons/src/lib/components/sub-nav/sub-nav.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  IconModule,
  ButtonModule,
  DropmenuModule,
} from '@cca-fab/cca-fab-components-common';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
