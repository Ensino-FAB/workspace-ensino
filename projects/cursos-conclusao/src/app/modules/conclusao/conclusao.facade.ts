import { Injectable, Injector } from '@angular/core';
import { ConclusaoService } from '../../services/conclusao.service';
import { PessoaService } from '../../services/pessoa.service';
import { PropostaConclusaoSearch } from '../../models/proposta-conclusao-search.model';
import { Observable } from 'rxjs';
import { Pageable } from '../../../../../ensino-commons/src/lib/models/pageable.model';
import { ConclusaoCursoResponse } from '../../models/conclusao-curso-response.model';

@Injectable()
export class ConclusaoFacade {
  private _ConclusaoService: ConclusaoService;
  private _PessoaService: PessoaService;

  constructor(private injector: Injector) {}

  public get conclusaoService(): ConclusaoService {
    if (!this._ConclusaoService) {
      this._ConclusaoService = this.injector.get(ConclusaoService);
    }
    return this._ConclusaoService;
  }

  public get pessoaService(): PessoaService {
    if (!this._PessoaService) {
      this._PessoaService = this.injector.get(PessoaService);
    }
    return this._PessoaService;
  }

  public getAlConclusao(
    search: PropostaConclusaoSearch
  ): Observable<Pageable<ConclusaoCursoResponse>> {
    return this.conclusaoService.findAll(search);
  }

  public findByConclusao(id: number): Observable<ConclusaoCursoResponse> {
    return this.conclusaoService.findById(id);
  }

  public delete(id: number): Observable<any> {
    return this.conclusaoService.remove(id);
  }
}
