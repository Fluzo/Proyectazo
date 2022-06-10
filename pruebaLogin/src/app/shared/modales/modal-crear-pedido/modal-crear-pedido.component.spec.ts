import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearPedidoComponent } from './modal-crear-pedido.component';

describe('ModalCrearPedidoComponent', () => {
  let component: ModalCrearPedidoComponent;
  let fixture: ComponentFixture<ModalCrearPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
