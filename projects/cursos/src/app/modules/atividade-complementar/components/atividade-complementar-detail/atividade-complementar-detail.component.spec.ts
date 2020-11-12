import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeComplementarDetailComponent } from './atividade-complementar-detail.component';

describe('AtividadeComplementarDetailComponent', () => {
  let component: AtividadeComplementarDetailComponent;
  let fixture: ComponentFixture<AtividadeComplementarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtividadeComplementarDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeComplementarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
