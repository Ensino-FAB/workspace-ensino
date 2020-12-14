import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcessDiagram } from 'projects/ensino-commons/src/lib/types/ProcessDiagram';
import { fadeIn } from 'projects/ensino-commons/src/public-api';
import { PropostaFacade } from '../../proposta.facade';

@Component({
  selector: 'app-detalhe-processo',
  templateUrl: './detalhe-processo.component.html',
  styleUrls: ['./detalhe-processo.component.scss'],
  animations: [fadeIn()],
})
export class DetalheProcessoComponent implements OnInit {
  _isDiagramOpen = false;
  _processInstanceId: string;

  diagramsList: ProcessDiagram[];
  currentDiagram: ProcessDiagram;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private facade: PropostaFacade
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parameter) => {
      this._processInstanceId = parameter.rev;
    });
  }

  openDiagram() {
    this.facade
      .getBPMN(this._processInstanceId)
      .subscribe((processDiagrams) => {
        this.diagramsList = processDiagrams;
        this.currentDiagram = processDiagrams[0];
        this._isDiagramOpen = true;
      });
  }

  onDiagramNavigation() {
    if (this.diagramsList.length > 1) {
      this.currentDiagram = this.diagramsList[
        this.diagramsList.indexOf(this.currentDiagram) + 1
      ];
    }
  }

  closeDiagram() {
    this._isDiagramOpen = false;
  }
}
