import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheBasicoConclusaoComponent } from './detalhe-basico-conclusao.component';

describe('DetalheBasicoConclusaoComponent', () => {
  let component: DetalheBasicoConclusaoComponent;
  let fixture: ComponentFixture<DetalheBasicoConclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheBasicoConclusaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheBasicoConclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
