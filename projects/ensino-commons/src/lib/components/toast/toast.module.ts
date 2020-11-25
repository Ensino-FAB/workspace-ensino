import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule as ToastUiModule } from '@cca-fab/cca-fab-components-common';
import { ToastComponent } from './toast.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, ToastUiModule, OverlayModule],
})
export class ToastModule {}
