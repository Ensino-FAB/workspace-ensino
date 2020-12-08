import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pageable } from 'projects/ensino-commons/src/lib/models/pageable.model';
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
