import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProcessDiagram } from '../../../../../../../../projects/ensino-commons/src/lib/types/ProcessDiagram';
import { fadeIn } from '../../../../../../../../projects/ensino-commons/src/public-api';
import { PropostaFacade } from '../../proposta.facade';

@Component({
  selector: 'app-detalhe-processo',
  templateUrl: './detalhe-processo.component.html',
  styleUrls: ['./detalhe-processo.component.scss'],
  animations: [fadeIn()],
})
export class DetalheProcessoComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  _isDiagramOpen = false;
  _processInstanceId: string;
  _showPanel = false;

  diagramsList: ProcessDiagram[];
  currentDiagram: ProcessDiagram;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private facade: PropostaFacade
  ) {}

  ngOnInit(): void {
    this._processInstanceId = this._activatedRoute.snapshot.params['rev'];
    this.showDiagramPanel();
    // this._activatedRoute.params.subscribe((parameter) => {
    //   console.log(parameter)
    //   this._processInstanceId = parameter.rev;
    // });
  }

  openDiagram() {
    this.subs$.push(
      this.facade
        .getBPMN(this._processInstanceId)
        .subscribe((processDiagrams) => {
          this.diagramsList = processDiagrams;
          this.currentDiagram = processDiagrams[0];
          this._isDiagramOpen = true;
        })
    );
  }

  showDiagramPanel(): void {
    this.subs$.push(
      this.facade
        .getAllTasks(this._processInstanceId)
        .subscribe((tasksList) => {
          this._showPanel = tasksList.length ? true : false;
        })
    );
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

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
