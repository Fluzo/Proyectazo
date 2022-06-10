import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipperSustratosComponent } from './swipper-sustratos.component';

describe('SwipperSustratosComponent', () => {
  let component: SwipperSustratosComponent;
  let fixture: ComponentFixture<SwipperSustratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipperSustratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperSustratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
