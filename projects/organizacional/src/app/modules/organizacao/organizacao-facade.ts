import { Injectable, Injector } from '@angular/core';
import { OrganizacaoService } from '../../services/organizacao.service';
import { Organizacao } from '../../models/organizacao.model';
import { Observable } from 'rxjs';
import { Pageable } from '../../../../../ensino-commons/src/lib/models/pageable.model';
import { OrganizacaoSearch } from '../../models/organizacao-search.model';

@Injectable()
export class OrganizacaoFacade {
  private _organizacaoService: OrganizacaoService;

  constructor(private injector: Injector) {}

  private get service(): OrganizacaoService {
    if (!this._organizacaoService) {
      this._organizacaoService = this.injector.get(OrganizacaoService);
    }
    return this._organizacaoService;
  }

  public getAllOrganizacao(
    search: OrganizacaoSearch
  ): Observable<Pageable<Organizacao>> {
    return this.service.findAll(search);
  }

  public delete(id: number): Observable<any> {
    return this.service.remove(id);
  }

  public save(record: Organizacao): any {
    return this.service.save(record);
  }

  public findCatalogo(id: number): Observable<Organizacao> {
    return this.service.findById(id);
  }
}
