import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeComplementarSearchComponent } from './atividade-complementar-search.component';

describe('AtividadeComplementarSearchComponent', () => {
  let component: AtividadeComplementarSearchComponent;
  let fixture: ComponentFixture<AtividadeComplementarSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtividadeComplementarSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeComplementarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
