import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsStgjScoutsComponent } from './about-us-stgj-scouts.component';

describe('AboutUsStgjScoutsComponent', () => {
  let component: AboutUsStgjScoutsComponent;
  let fixture: ComponentFixture<AboutUsStgjScoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsStgjScoutsComponent]
    });
    fixture = TestBed.createComponent(AboutUsStgjScoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
