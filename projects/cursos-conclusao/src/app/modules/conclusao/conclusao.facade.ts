import { Injectable, Injector } from '@angular/core';
import { ConclusaoService } from '../../services/conclusao.service';

@Injectable()
export class ConclusaoFacade {
  private _ConclusaoService: ConclusaoService;

  constructor(private injector: Injector) {}

  private get conclusaoService(): ConclusaoService {
    if (!this._ConclusaoService) {
      this._ConclusaoService = this.injector.get(ConclusaoService);
    }
    return this._ConclusaoService;
  }
}
