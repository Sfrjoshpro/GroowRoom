import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Veg2Component } from './veg2.component';

describe('Veg2Component', () => {
  let component: Veg2Component;
  let fixture: ComponentFixture<Veg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Veg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Veg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
