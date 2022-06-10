import { TestBed } from '@angular/core/testing';

import { ValidadorContrasenaService } from './validador-contrasena.service';

describe('ValidadorContrasenaService', () => {
  let service: ValidadorContrasenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidadorContrasenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
