import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IconModule,
  ButtonModule,
  BreadcrumbModule,
} from '@cca-fab/cca-fab-components-common';

import { SubNavComponent } from './sub-nav.component';

@NgModule({
  declarations: [SubNavComponent],
  imports: [
    CommonModule,
    IconModule,
    ButtonModule,
    BreadcrumbModule,
    RouterModule,
  ],
  exports: [SubNavComponent],
})
export class SubNavModule {}
