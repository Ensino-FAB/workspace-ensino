import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheBasicoComponent } from './detalhe-basico.component';

describe('DetalheBasicoComponent', () => {
  let component: DetalheBasicoComponent;
  let fixture: ComponentFixture<DetalheBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheBasicoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
