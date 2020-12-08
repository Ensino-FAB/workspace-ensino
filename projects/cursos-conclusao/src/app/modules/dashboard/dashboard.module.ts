import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardModule, IconModule } from '@cca-fab/cca-fab-components-common';
import { NoDashboardYetModule } from 'projects/ensino-commons/src/public-api';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IconModule,
    CardModule,
    NoDashboardYetModule,
  ],
})
export class DashboardModule {}
