import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BpmnViewerComponent } from './bpmn-viewer.component';

@NgModule({
  declarations: [BpmnViewerComponent],
  imports: [CommonModule],
  exports: [BpmnViewerComponent],
})
export class BpmnViewerModule {}
