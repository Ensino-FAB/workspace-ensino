import { TestBed } from '@angular/core/testing';

import { CatalogoCursoService } from './catalogo-curso.service';

describe('CatalogoCursoService', () => {
  let service: CatalogoCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
