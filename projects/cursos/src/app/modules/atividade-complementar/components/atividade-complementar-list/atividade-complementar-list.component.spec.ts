import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeComplementarListComponent } from './atividade-complementar-list.component';

describe('AtividadeComplementarListComponent', () => {
  let component: AtividadeComplementarListComponent;
  let fixture: ComponentFixture<AtividadeComplementarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtividadeComplementarListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeComplementarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
