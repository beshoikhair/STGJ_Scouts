import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsOverviewPageComponent } from './teams-overview-page.component';

describe('TeamsOverviewPageComponent', () => {
  let component: TeamsOverviewPageComponent;
  let fixture: ComponentFixture<TeamsOverviewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsOverviewPageComponent]
    });
    fixture = TestBed.createComponent(TeamsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
