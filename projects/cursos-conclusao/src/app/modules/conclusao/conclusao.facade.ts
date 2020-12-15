import { Injectable, Injector } from '@angular/core';
import { ConclusaoService } from '../../services/conclusao.service';
import { PessoaService } from '../../services/pessoa.service';

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
}
