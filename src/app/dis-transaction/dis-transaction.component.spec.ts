import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisTransactionComponent } from './dis-transaction.component';

describe('DisTransactionComponent', () => {
  let component: DisTransactionComponent;
  let fixture: ComponentFixture<DisTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
