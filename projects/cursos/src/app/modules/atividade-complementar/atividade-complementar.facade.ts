import { AtividadeComplementar } from './../../models/atividade-complementar.model';
import { AtividadeComplementarSearch } from './../../models/atividade-complementar-search.model';
import { AtividadeComplementarService } from './../../services/atividade-complementar.service';
import { Injectable, Injector } from '@angular/core';
import { Pageable } from 'projects/ensino-commons/src/public-api';
import { Observable } from 'rxjs';

@Injectable()
export class AtividadeComplementarFacade {
  // tslint:disable-next-line: variable-name
  private _atividadeComplementarService: AtividadeComplementarService;

  constructor(private injector: Injector) {}

  private get atividadeComplementarService(): AtividadeComplementarService {
    if (!this._atividadeComplementarService) {
      this._atividadeComplementarService = this.injector.get(
        AtividadeComplementarService
      );
    }
    return this._atividadeComplementarService;
  }

  public getAllAtividadeComplemetarService(
    search: AtividadeComplementarSearch
  ): Observable<Pageable<AtividadeComplementar>> {
    return this.atividadeComplementarService.findAll(search);
  }

  public save(record: AtividadeComplementar): any {
    return this.atividadeComplementarService.save(record);
  }

  public delete(id: number): Observable<any> {
    return this.atividadeComplementarService.remove(id);
  }

  public findAtividadeComplementar(
    id: number
  ): Observable<AtividadeComplementar> {
    return this.atividadeComplementarService.findById(id);
  }
}
