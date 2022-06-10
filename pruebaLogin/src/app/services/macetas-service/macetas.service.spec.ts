import { TestBed } from '@angular/core/testing';

import { MacetasService } from './macetas.service';

describe('MacetasService', () => {
  let service: MacetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
