import { TestBed } from '@angular/core/testing';

import { PropostaCursoService } from './proposta-curso.service';

describe('PropostaCursoService', () => {
  let service: PropostaCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropostaCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
