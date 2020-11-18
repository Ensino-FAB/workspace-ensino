import { Catalogo } from './../../models/catalogo.model';
import { CatalogoSearch } from './../../models/catalogo-search.model';
import { CatalogoCursoService } from './../../services/catalogo-curso.service';
import { Injectable, Injector } from '@angular/core';
import { Pageable } from 'projects/ensino-commons/src/public-api';
import { Observable } from 'rxjs';

@Injectable()
export class CatalogoFacade {
  // tslint:disable-next-line: variable-name
  private _catalogoService: CatalogoCursoService;

  constructor(private injector: Injector) {}

  private get catalgoService(): CatalogoCursoService {
    if (!this._catalogoService) {
      this._catalogoService = this.injector.get(CatalogoCursoService);
    }
    return this._catalogoService;
  }

  public getAllCatalogoService(
    search: CatalogoSearch
  ): Observable<Pageable<Catalogo>> {
    return this.catalgoService.findAll(search);
  }
}
