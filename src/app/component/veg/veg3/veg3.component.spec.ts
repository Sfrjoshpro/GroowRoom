import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Veg3Component } from './veg3.component';

describe('Veg3Component', () => {
  let component: Veg3Component;
  let fixture: ComponentFixture<Veg3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Veg3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Veg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
