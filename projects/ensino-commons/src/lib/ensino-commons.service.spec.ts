import { TestBed } from '@angular/core/testing';

import { EnsinoCommonsService } from './ensino-commons.service';

describe('EnsinoCommonsService', () => {
  let service: EnsinoCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnsinoCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
