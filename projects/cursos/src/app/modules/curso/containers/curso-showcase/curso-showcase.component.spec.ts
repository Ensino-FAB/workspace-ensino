import { IconModule, ButtonModule } from '@cca-fab/cca-fab-components-common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CursoShowcaseComponent } from './curso-showcase.component';

describe('CursoShowcaseComponent', () => {
  let component: CursoShowcaseComponent;
  let fixture: ComponentFixture<CursoShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoShowcaseComponent],
      imports: [RouterTestingModule, IconModule, ButtonModule],
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
