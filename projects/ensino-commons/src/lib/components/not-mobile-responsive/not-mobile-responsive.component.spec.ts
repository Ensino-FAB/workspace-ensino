import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotMobileResponsiveComponent } from './not-mobile-responsive.component';

describe('NotMobileResponsiveComponent', () => {
  let component: NotMobileResponsiveComponent;
  let fixture: ComponentFixture<NotMobileResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotMobileResponsiveComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotMobileResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
