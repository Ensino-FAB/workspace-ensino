import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoShowcaseComponent } from './curso-showcase.component';

describe('CursoShowcaseComponent', () => {
  let component: CursoShowcaseComponent;
  let fixture: ComponentFixture<CursoShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoShowcaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
