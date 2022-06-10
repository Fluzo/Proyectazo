import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipperMacetasComponent } from './swipper-macetas.component';

describe('SwipperMacetasComponent', () => {
  let component: SwipperMacetasComponent;
  let fixture: ComponentFixture<SwipperMacetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipperMacetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperMacetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
