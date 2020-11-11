import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDashboardYetComponent } from './no-dashboard-yet.component';

describe('NoDashboardYetComponent', () => {
  let component: NoDashboardYetComponent;
  let fixture: ComponentFixture<NoDashboardYetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoDashboardYetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDashboardYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
