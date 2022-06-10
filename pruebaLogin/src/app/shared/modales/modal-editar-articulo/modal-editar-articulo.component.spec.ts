import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarArticuloComponent } from './modal-editar-articulo.component';

describe('ModalEditarArticuloComponent', () => {
  let component: ModalEditarArticuloComponent;
  let fixture: ComponentFixture<ModalEditarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
