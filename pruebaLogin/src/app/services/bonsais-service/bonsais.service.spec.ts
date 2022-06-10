import { TestBed } from '@angular/core/testing';

import { BonsaisService } from './bonsais.service';

describe('BonsaisService', () => {
  let service: BonsaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonsaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
