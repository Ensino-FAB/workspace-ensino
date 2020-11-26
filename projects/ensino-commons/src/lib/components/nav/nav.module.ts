import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

import {
  ButtonModule,
  IconModule,
  CardModule,
} from '@cca-fab/cca-fab-components-common';

import { NavComponent } from './nav.component';
import { NavItemComponent } from './nav-item.component';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [NavComponent, NavItemComponent],
  imports: [
    CommonModule,
    ButtonModule,
    IconModule,
    CardModule,
    RouterModule,
    DirectivesModule,
  ],
  exports: [NavComponent, NavItemComponent],
})
export class NavModule {}
