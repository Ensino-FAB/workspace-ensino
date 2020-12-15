import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroStep3Component } from './cadastro-step3.component';

describe('CadastroStep3Component', () => {
  let component: CadastroStep3Component;
  let fixture: ComponentFixture<CadastroStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroStep3Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
