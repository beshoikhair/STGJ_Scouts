import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsBadenPowellComponent } from './about-us-baden-powell.component';

describe('AboutUsBadenPowellComponent', () => {
  let component: AboutUsBadenPowellComponent;
  let fixture: ComponentFixture<AboutUsBadenPowellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsBadenPowellComponent]
    });
    fixture = TestBed.createComponent(AboutUsBadenPowellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
