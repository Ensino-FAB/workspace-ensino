import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeComplementarShowcaseComponent } from './atividade-complementar-showcase.component';

describe('AtividadeComplementarShowcaseComponent', () => {
  let component: AtividadeComplementarShowcaseComponent;
  let fixture: ComponentFixture<AtividadeComplementarShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtividadeComplementarShowcaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeComplementarShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
