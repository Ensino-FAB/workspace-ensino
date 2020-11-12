import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeComplementarFormComponent } from './atividade-complementar-form.component';

describe('AtividadeComplementarFormComponent', () => {
  let component: AtividadeComplementarFormComponent;
  let fixture: ComponentFixture<AtividadeComplementarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtividadeComplementarFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeComplementarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
