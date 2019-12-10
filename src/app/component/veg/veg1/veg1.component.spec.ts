import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Veg1Component } from './veg1.component';

describe('Veg1Component', () => {
  let component: Veg1Component;
  let fixture: ComponentFixture<Veg1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Veg1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Veg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
