import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProcessoComponent } from './detalhe-processo.component';

describe('DetalheProcessoComponent', () => {
  let component: DetalheProcessoComponent;
  let fixture: ComponentFixture<DetalheProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheProcessoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
