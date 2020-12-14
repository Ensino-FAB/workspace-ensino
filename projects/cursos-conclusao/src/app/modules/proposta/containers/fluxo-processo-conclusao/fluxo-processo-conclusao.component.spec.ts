import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxoProcessoConclusaoComponent } from './fluxo-processo-conclusao.component';

describe('FluxoProcessoConclusaoComponent', () => {
  let component: FluxoProcessoConclusaoComponent;
  let fixture: ComponentFixture<FluxoProcessoConclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FluxoProcessoConclusaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxoProcessoConclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
