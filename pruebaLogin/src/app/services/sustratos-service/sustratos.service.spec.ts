import { TestBed } from '@angular/core/testing';

import { SustratosService } from './sustratos.service';

describe('SustratosService', () => {
  let service: SustratosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SustratosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
