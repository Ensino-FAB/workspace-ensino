import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeComplementarEditComponent } from './atividade-complementar-edit.component';

describe('AtividadeComplementarEditComponent', () => {
  let component: AtividadeComplementarEditComponent;
  let fixture: ComponentFixture<AtividadeComplementarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtividadeComplementarEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeComplementarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
