import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsinoCommonsComponent } from './ensino-commons.component';

describe('EnsinoCommonsComponent', () => {
  let component: EnsinoCommonsComponent;
  let fixture: ComponentFixture<EnsinoCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnsinoCommonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsinoCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
