import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppPageComponent } from './loan-app.component';

describe('AddAppPageComponent', () => {
  let component: AddAppPageComponent;
  let fixture: ComponentFixture<AddAppPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAppPageComponent]
    });
    fixture = TestBed.createComponent(AddAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
