import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule, IconModule } from '@cca-fab/cca-fab-components-common';
import { NoDashboardYetModule } from '../../../../../ensino-commons/src/lib/components/no-dashboard-yet/no-dashboard-yet.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconModule,
    CardModule,
    NoDashboardYetModule,
  ],
})
export class HomeModule {}
