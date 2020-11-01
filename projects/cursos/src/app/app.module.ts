import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconModule, ButtonModule } from '@cca-fab/cca-fab-components-common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IconModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
