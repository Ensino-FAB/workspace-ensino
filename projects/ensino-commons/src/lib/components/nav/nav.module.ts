import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonModule,
  IconModule,
  CardModule,
} from '@cca-fab/cca-fab-components-common';

import { NavComponent } from './nav.component';
import { NavItemComponent } from './nav-item.component';

@NgModule({
  declarations: [NavComponent, NavItemComponent],
  imports: [CommonModule, ButtonModule, IconModule, CardModule, RouterModule],
  exports: [NavComponent, NavItemComponent],
})
export class NavModule {}
