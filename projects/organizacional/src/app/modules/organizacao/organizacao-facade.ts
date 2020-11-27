import { OrganizacaoService } from './../../services/organizacao.service';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class OrganizacaoFacade {
  private _organizacaoService: OrganizacaoService;

  constructor(private injector: Injector) {}

  private get organizacaoService(): OrganizacaoService {
    if (!this._organizacaoService) {
      this._organizacaoService = this.injector.get(OrganizacaoService);
    }
    return this._organizacaoService;
  }
}
