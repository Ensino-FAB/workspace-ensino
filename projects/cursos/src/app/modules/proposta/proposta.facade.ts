import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { Pageable } from 'projects/ensino-commons/src/lib/models/pageable.model';

import { PropostaCursoService } from '../../services/proposta-curso.service';
import { PropostaSearch } from '../../models/proposta-search.model';
import { Proposta } from '../../models/proposta.model';

@Injectable()
export class PropostaFacade {
  // tslint:disable-next-line: variable-name
  private _propostaService: PropostaCursoService;

  constructor(private injector: Injector) {}

  private get propotaService(): PropostaCursoService {
    if (!this._propostaService) {
      this._propostaService = this.injector.get(PropostaCursoService);
    }
    return this._propostaService;
  }

  public getAllProposta(
    search: PropostaSearch
  ): Observable<Pageable<Proposta>> {
    return this.propotaService.findAll(search);
  }

  public getProposta(id: number): Observable<Proposta> {
    return this.propotaService.findById(id);
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
}
