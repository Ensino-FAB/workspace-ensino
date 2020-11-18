import { Curso } from './../../models/curso.model';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { CursoSearch } from '../../models/curso-search.model';
import { Pageable } from 'projects/ensino-commons/src/lib/models/pageable.model';

import { CursoService } from '../../services/curso.service';

@Injectable()
export class CursoFacade {
  // tslint:disable-next-line: variable-name
  private _cursoService: CursoService;

  constructor(private injector: Injector) {}

  private get cursoService(): CursoService {
    if (!this._cursoService) {
      this._cursoService = this.injector.get(CursoService);
    }
    return this._cursoService;
  }

  public getAllCurso(search: CursoSearch): Observable<Pageable<Curso>> {
    return this.cursoService.findAll(search);
  }

  public getCurso(id: number): Observable<Curso> {
    return this.cursoService.findById(id);
  }

  public save(record: Curso): any {
    return this.cursoService.save(record);
  }
}
