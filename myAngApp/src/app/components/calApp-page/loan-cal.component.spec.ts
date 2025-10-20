import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCalComponent } from './loan-cal.component';

describe('LoanCalComponent', () => {
  let component: LoanCalComponent;
  let fixture: ComponentFixture<LoanCalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanCalComponent]
    });
    fixture = TestBed.createComponent(LoanCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
