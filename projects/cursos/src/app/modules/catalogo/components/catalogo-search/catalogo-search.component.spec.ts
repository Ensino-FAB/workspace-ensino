import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoSearchComponent } from './catalogo-search.component';

describe('CatalogoSearchComponent', () => {
  let component: CatalogoSearchComponent;
  let fixture: ComponentFixture<CatalogoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
