import { TestBed } from '@angular/core/testing';

import { PedidosAPIService } from './pedidos-api.service';

describe('PedidosAPIService', () => {
  let service: PedidosAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
