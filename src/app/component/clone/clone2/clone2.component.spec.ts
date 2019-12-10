import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clone2Component } from './clone2.component';

describe('Clone2Component', () => {
  let component: Clone2Component;
  let fixture: ComponentFixture<Clone2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clone2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clone2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
