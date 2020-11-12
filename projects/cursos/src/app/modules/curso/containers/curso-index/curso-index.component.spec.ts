import { ButtonModule, IconModule } from '@cca-fab/cca-fab-components-common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CursoIndexComponent } from './curso-index.component';

describe('CursoIndexComponent', () => {
  let component: CursoIndexComponent;
  let fixture: ComponentFixture<CursoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoIndexComponent],
      imports: [RouterTestingModule, ButtonModule, IconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
