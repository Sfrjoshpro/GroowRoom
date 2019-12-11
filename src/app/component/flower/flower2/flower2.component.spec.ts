import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flower2Component } from './flower2.component';

describe('Flower2Component', () => {
  let component: Flower2Component;
  let fixture: ComponentFixture<Flower2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flower2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flower2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
