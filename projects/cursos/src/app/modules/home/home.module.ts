import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule, IconModule } from '@cca-fab/cca-fab-components-common';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, IconModule, CardModule],
})
export class HomeModule {}
