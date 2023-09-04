import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowTextButtonComponent } from './yellow-text-button.component';

describe('YellowTextButtonComponent', () => {
  let component: YellowTextButtonComponent;
  let fixture: ComponentFixture<YellowTextButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YellowTextButtonComponent]
    });
    fixture = TestBed.createComponent(YellowTextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
