import { PessoaService } from './../../services/pessoa.service';
import { Injectable, Injector } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Pageable } from '../../../../../ensino-commons/src/lib/models/pageable.model';
import { map } from 'rxjs/operators';
import { PropostaConclusaoService } from '../../services/proposta-conclusao.service';
import { ProcessoConclusaoService } from '../../services/processo.service';
import { TarefaService } from '../../services/tarefa.service';
import { PropostaConclusaoSearch } from '../../models/proposta-conclusao-search.model';
import { Proposta, PropostaRequest } from '../../models/proposta.model';
import { Processo } from '../../models/processo.model';
import { Tarefa } from '../../models/tarefa.model';
import { ProcessDiagram } from '../../../../../../projects/ensino-commons/src/lib/types/ProcessDiagram';
import { CapacitacaoService } from '../../services/capacitacao.service';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class PropostaFacade {
  private _propostaService: PropostaConclusaoService;
  private _processoService: ProcessoConclusaoService;
  private _PessoaService: PessoaService;
  private _tarefaService: TarefaService;
  private _CapacitacaoService: CapacitacaoService;

  constructor(private injector: Injector) {}

  private get propotaService(): PropostaConclusaoService {
    if (!this._propostaService) {
      this._propostaService = this.injector.get(PropostaConclusaoService);
    }
    return this._propostaService;
  }
  private get processoService(): ProcessoConclusaoService {
    if (!this._processoService) {
      this._processoService = this.injector.get(ProcessoConclusaoService);
    }
    return this._processoService;
  }

  private get tarefaService(): TarefaService {
    if (!this._tarefaService) {
      this._tarefaService = this.injector.get(TarefaService);
    }
    return this._tarefaService;
  }

  public get capacitacaoService(): CapacitacaoService {
    if (!this._CapacitacaoService) {
      this._CapacitacaoService = this.injector.get(CapacitacaoService);
    }
    return this._CapacitacaoService;
  }

  public get pessoaService(): PessoaService {
    if (!this._PessoaService) {
      this._PessoaService = this.injector.get(PessoaService);
    }
    return this._PessoaService;
  }

  public getAllProposta(
    search: PropostaConclusaoSearch
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

  public getAllTasks(processInstanceId: string): Observable<any> {
    return this.processoService.findTasks(processInstanceId);
  }

  public save(record: PropostaRequest): any {
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
