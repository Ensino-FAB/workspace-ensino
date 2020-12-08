import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroStep1Component } from './cadastro-step1.component';

describe('CadastroStep1Component', () => {
  let component: CadastroStep1Component;
  let fixture: ComponentFixture<CadastroStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroStep1Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
