import {
  Component,
  ViewChild,
  ElementRef,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  AfterViewChecked,
} from '@angular/core';
import * as BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js';
import { ProcessDiagram } from '../../types/ProcessDiagram';

@Component({
  selector: 'ensino-bpmn-viewer',
  templateUrl: './bpmn-viewer.component.html',
  styleUrls: ['./bpmn-viewer.component.scss'],
})
export class BpmnViewerComponent implements OnDestroy, AfterViewChecked {
  @ViewChild('ref', { static: true }) private el: ElementRef;

  @Output() navigation: any = new EventEmitter();

  private bpmnViewer: BpmnJS;

  @Input() set processDiagram(value: ProcessDiagram) {
    this._processDiagram = value;

    this.recreateBPMN();
    this.openDiagram(
      this.processDiagram.diagram,
      this.processDiagram.activeTasks
    );
  }

  get processDiagram() {
    return this._processDiagram;
  }

  _processDiagram: ProcessDiagram;
  _firstLoad = false;
  _isGrabbing = false;

  constructor() {
    this.bpmnViewer = new BpmnJS();
  }

  onClick() {
    this.navigation.emit();
  }

  onMouseDown() {
    this._isGrabbing = true;
  }

  onMouseUp() {
    this._isGrabbing = false;
  }

  ngOnDestroy(): void {
    this.bpmnViewer.destroy();
  }

  ngAfterViewChecked(): void {
    if (this._firstLoad) {
      const isRendered = !!document.body.contains(this.el.nativeElement);

      if (!isRendered) {
        return;
      }

      this.bpmnViewer.get('canvas').zoom('fit-viewport', 1);
      this._firstLoad = false;
    }
  }

  /* istanbul ignore next */
  private recreateBPMN() {
    this.bpmnViewer.detach();
    this.bpmnViewer.attachTo(this.el.nativeElement);
  }

  /* istanbul ignore next */
  private openDiagram(bpmnXML: string, tarefas: string[]) {
    try {
      this.bpmnViewer
        .importXML(bpmnXML)
        .then(() => {
          const canvas = this.bpmnViewer.get('canvas');

          tarefas.forEach((tarefa) => {
            const element = this.el.nativeElement.querySelector(
              `g[data-element-id="${tarefa}"]`
            );

            canvas.addMarker(tarefa, 'BPMN_SELECTED_TASK');
            if (element && this.processDiagram.hasSubProcess) {
              canvas.addMarker(tarefa, 'clickable');
              element.addEventListener('click', this.onClick.bind(this));
            }
          });

          this._firstLoad = true;
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
      console.error('could not import BPMN 2.0 diagram', err);
    }
  }
}
