import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoIndexComponent } from './catalogo-index.component';

describe('CatalogoIndexComponent', () => {
  let component: CatalogoIndexComponent;
  let fixture: ComponentFixture<CatalogoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoIndexComponent],
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
