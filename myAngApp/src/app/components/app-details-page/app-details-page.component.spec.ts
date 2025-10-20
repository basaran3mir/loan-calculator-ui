import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsPageComponent } from './app-details-page.component';

describe('AppDetailsPageComponent', () => {
  let component: AppDetailsPageComponent;
  let fixture: ComponentFixture<AppDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDetailsPageComponent]
    });
    fixture = TestBed.createComponent(AppDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
