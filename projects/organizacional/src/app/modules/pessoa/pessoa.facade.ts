import { Pessoa } from './../../models/pessoa.model';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PessoaSearch } from '../../models/pessoa-search.model';
import { Pageable } from 'projects/ensino-commons/src/lib/models/pageable.model';
import { PessoaService } from '../../services/pessoa.service';

@Injectable()
export class PessoaFacade {
  private _PessoaService: PessoaService;

  constructor(private injector: Injector) {}

  private get pessoaService(): PessoaService {
    if (!this._PessoaService) {
      this._PessoaService = this.injector.get(PessoaService);
    }
    return this._PessoaService;
  }

  public getAllCurso(search: PessoaSearch): Observable<Pageable<Pessoa>> {
    return of();
    // return this.pessoaService.findAll(search);
  }

  public getCurso(id: number): Observable<Pessoa> {
    return of();
    // return this.pessoaService.findById(id);
  }

  public save(record: Pessoa): any {
    return of();
    // return this.pessoaService.save(record);
  }

  public delete(id: number): Observable<any> {
    return of();
    // return this.pessoaService.remove(id);
  }

  public findCurso(id: number): Observable<Pessoa> {
    return of();
    // return this.pessoaService.findById(id);
  }
}
