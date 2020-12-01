import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheBasicoPessoaComponent } from './detalhe-basico-pessoa.component';

describe('DetalheBasicoPessoaComponent', () => {
  let component: DetalheBasicoPessoaComponent;
  let fixture: ComponentFixture<DetalheBasicoPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheBasicoPessoaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheBasicoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
