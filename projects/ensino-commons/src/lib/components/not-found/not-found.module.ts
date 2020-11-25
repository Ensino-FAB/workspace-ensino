import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '@cca-fab/cca-fab-components-common';

import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, ButtonModule, RouterModule],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
