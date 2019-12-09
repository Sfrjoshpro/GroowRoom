import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifactionsComponent } from './notifactions.component';

describe('NotifactionsComponent', () => {
  let component: NotifactionsComponent;
  let fixture: ComponentFixture<NotifactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
