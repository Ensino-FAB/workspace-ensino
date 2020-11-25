import { Catalogo } from './../../models/catalogo.model';
import { CatalogoSearch } from './../../models/catalogo-search.model';
import { CatalogoCursoService } from './../../services/catalogo-curso.service';
import { Injectable, Injector } from '@angular/core';
import { Pageable } from 'projects/ensino-commons/src/public-api';
import { Observable } from 'rxjs';
import { Curso } from '../../models/curso.model';

@Injectable()
export class CatalogoFacade {
  // tslint:disable-next-line: variable-name
  private _catalogoService: CatalogoCursoService;

  constructor(private injector: Injector) {}

  private get catalagoService(): CatalogoCursoService {
    if (!this._catalogoService) {
      this._catalogoService = this.injector.get(CatalogoCursoService);
    }
    return this._catalogoService;
  }

  public getAllCatalogoService(
    search: CatalogoSearch
  ): Observable<Pageable<Catalogo>> {
    return this.catalagoService.findAll(search);
  }

  public delete(id: number): Observable<any> {
    return this.catalagoService.remove(id);
  }

  public save(record: Catalogo): any {
    return this.catalagoService.save(record);
  }

  public findCatalogo(id: number): Observable<Catalogo> {
    return this.catalagoService.findById(id);
  }
}
