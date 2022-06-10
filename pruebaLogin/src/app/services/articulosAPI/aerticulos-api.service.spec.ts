import { TestBed } from '@angular/core/testing';

import { AerticulosAPIService } from './aerticulos-api.service';

describe('AerticulosAPIService', () => {
  let service: AerticulosAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AerticulosAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
