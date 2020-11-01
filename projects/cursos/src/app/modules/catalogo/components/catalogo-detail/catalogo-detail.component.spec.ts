import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoDetailComponent } from './catalogo-detail.component';

describe('CatalogoDetailComponent', () => {
  let component: CatalogoDetailComponent;
  let fixture: ComponentFixture<CatalogoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
