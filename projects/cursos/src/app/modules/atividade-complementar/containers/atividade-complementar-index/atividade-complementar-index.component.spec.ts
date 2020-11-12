import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeComplementarIndexComponent } from './atividade-complementar-index.component';

describe('AtividadeComplementarIndexComponent', () => {
  let component: AtividadeComplementarIndexComponent;
  let fixture: ComponentFixture<AtividadeComplementarIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtividadeComplementarIndexComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeComplementarIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
