import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppsComponent } from './my-apps.component';

describe('HomeComponent', () => {
  let component: MyAppsComponent;
  let fixture: ComponentFixture<MyAppsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAppsComponent]
    });
    fixture = TestBed.createComponent(MyAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
