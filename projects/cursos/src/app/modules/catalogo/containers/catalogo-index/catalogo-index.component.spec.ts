import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoIndexComponent } from './catalogo-index.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule, IconModule } from '@cca-fab/cca-fab-components-common';

describe('CatalogoIndexComponent', () => {
  let component: CatalogoIndexComponent;
  let fixture: ComponentFixture<CatalogoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoIndexComponent],
      imports: [RouterTestingModule, ButtonModule, IconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
