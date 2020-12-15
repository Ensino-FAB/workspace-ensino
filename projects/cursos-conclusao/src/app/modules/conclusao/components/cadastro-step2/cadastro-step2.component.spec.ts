import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroStep2Component } from './cadastro-step2.component';

describe('CadastroStep2Component', () => {
  let component: CadastroStep2Component;
  let fixture: ComponentFixture<CadastroStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroStep2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
