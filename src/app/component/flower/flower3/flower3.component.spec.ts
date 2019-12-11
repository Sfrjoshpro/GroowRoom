import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flower3Component } from './flower3.component';

describe('Flower3Component', () => {
  let component: Flower3Component;
  let fixture: ComponentFixture<Flower3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flower3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flower3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
