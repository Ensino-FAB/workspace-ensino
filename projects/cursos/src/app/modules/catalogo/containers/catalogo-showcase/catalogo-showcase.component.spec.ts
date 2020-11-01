import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoShowcaseComponent } from './catalogo-showcase.component';

describe('CatalogoShowcaseComponent', () => {
  let component: CatalogoShowcaseComponent;
  let fixture: ComponentFixture<CatalogoShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoShowcaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
