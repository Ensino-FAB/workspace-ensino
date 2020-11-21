import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'projects/ensino-commons/src/environments/environment';
import { Tarefa } from '../models/tarefa.model';
import { Processo } from '../models/processo.model';

@Injectable({ providedIn: 'root' })
export class TarefaService {
  constructor(protected http: HttpClient) {}

  findTask(instanceId: string): Observable<Tarefa> {
    return this.http.get<any>(
      `${environment.CURSO_API}/api/tarefas/${instanceId}`
    );
  }

  completeTask(instanceId: string, variables: any): Observable<Processo> {
    return this.http.post<any>(
      `${environment.CURSO_API}/api/tarefas/${instanceId}`,
      variables
    );
  }
}
