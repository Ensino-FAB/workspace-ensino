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

  public getAllPessoa(search: PessoaSearch): Observable<Pageable<Pessoa>> {
    return this.pessoaService.findAll(search);
  }

  public getPessoa(id: number): Observable<Pessoa> {
    return this.pessoaService.findById(id);
  }

  public save(record: Pessoa): any {
    return this.pessoaService.save(record);
  }

  public delete(id: number): Observable<any> {
    return this.pessoaService.remove(id);
  }

  public findPessoa(id: number): Observable<Pessoa> {
    return this.pessoaService.findById(id);
  }
}
