import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Middle1Component } from './middle1.component';

describe('Middle1Component', () => {
  let component: Middle1Component;
  let fixture: ComponentFixture<Middle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Middle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Middle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
