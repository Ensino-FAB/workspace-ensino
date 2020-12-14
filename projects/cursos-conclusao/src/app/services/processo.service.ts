import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProcessoConclusaoService {
  constructor(protected http: HttpClient) {}

  findDiagram(instanceId: string) {
    return this.http.get<any>(
      `${environment.CURSOS_CONCLUSAO_API}/api/processos/${instanceId}/diagram`
    );
  }

  findByUser() {
    return this.http.get<any>(
      `${environment.CURSOS_CONCLUSAO_API}/api/processos`
    );
  }

  findTasks(processoId: string) {
    return this.http.get<any>(
      `${environment.CURSOS_CONCLUSAO_API}/api/processos/${processoId}/tarefas`
    );
  }

  getHistory(instanceId: string) {
    return this.http.get<any>(
      `${environment.CURSOS_CONCLUSAO_API}/api/processos/${instanceId}/history`
    );
  }
}
