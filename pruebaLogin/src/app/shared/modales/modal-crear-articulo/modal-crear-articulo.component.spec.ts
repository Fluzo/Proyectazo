import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearArticuloComponent } from './modal-crear-articulo.component';

describe('ModalCrearArticuloComponent', () => {
  let component: ModalCrearArticuloComponent;
  let fixture: ComponentFixture<ModalCrearArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
