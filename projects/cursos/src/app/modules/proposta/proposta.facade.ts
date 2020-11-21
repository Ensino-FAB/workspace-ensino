import { Injectable, Injector } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

import { Pageable } from 'projects/ensino-commons/src/lib/models/pageable.model';

import { PropostaCursoService } from '../../services/proposta-curso.service';
import { PropostaSearch } from '../../models/proposta-search.model';
import { Proposta } from '../../models/proposta.model';
import { ProcessoService } from '../../services/processo.service';
import { ProcessDiagram } from './types/ProcessDiagram';
import { TarefaService } from '../../services/tarefa.service';
import { Processo } from '../../models/processo.model';
import { Tarefa } from '../../models/tarefa.model';
import { map } from 'rxjs/operators';

@Injectable()
export class PropostaFacade {
  // tslint:disable-next-line: variable-name
  private _propostaService: PropostaCursoService;
  private _processoService: ProcessoService;
  private _tarefaService: TarefaService;

  constructor(private injector: Injector) {}

  private get propotaService(): PropostaCursoService {
    if (!this._propostaService) {
      this._propostaService = this.injector.get(PropostaCursoService);
    }
    return this._propostaService;
  }
  private get processoService(): ProcessoService {
    if (!this._processoService) {
      this._processoService = this.injector.get(ProcessoService);
    }
    return this._processoService;
  }

  private get tarefaService(): TarefaService {
    if (!this._tarefaService) {
      this._tarefaService = this.injector.get(TarefaService);
    }
    return this._tarefaService;
  }

  public getAllProposta(
    search: PropostaSearch
  ): Observable<Pageable<Proposta>> {
    return this.propotaService.findAll(search);
  }

  public getProposta(id: number): Observable<any> {
    return new Observable((res$) => {
      this.propotaService.findById(id).subscribe((value) =>
        this.processoService
          .findTasks(value.instanciaProcessoId)
          .subscribe((res) => {
            res$.next({ entity: value, tasks: res });
          })
      );
    });
  }

  public save(record: Proposta): any {
    return this.propotaService.save(record);
  }

  public delete(id: number): Observable<any> {
    return this.propotaService.remove(id);
  }

  public findProposta(id: number): Observable<Proposta> {
    return this.propotaService.findById(id);
  }

  public getGestaoData(): Observable<any[]> {
    return new Observable((res$) => {
      forkJoin([this.processoService.findByUser()]).subscribe((data) => {
        res$.next(data[0]);
      });
    });
  }

  public getBPMN(processInstance: string): Observable<ProcessDiagram[]> {
    return new Observable((observable) => {
      this.processoService
        .findDiagram(processInstance)
        .subscribe((diagrams) => {
          const processDiagrams = [...diagrams];

          processDiagrams.forEach(
            (diagram, index) =>
              (diagram.hasSubProcess =
                diagrams.length > 1 && index < diagrams.length - 1
                  ? true
                  : false)
          );

          observable.next(processDiagrams as ProcessDiagram[]);
          observable.complete();
        });
    });
  }
  public getTarefa(taskInstance: string): Observable<Tarefa> {
    return this.tarefaService.findTask(taskInstance);
  }

  public completeTarefa(
    taskInstance: string,
    taskVariables: any
  ): Observable<Processo> {
    return this.tarefaService
      .completeTask(taskInstance, taskVariables)
      .pipe(map((variables) => variables));
  }
}
