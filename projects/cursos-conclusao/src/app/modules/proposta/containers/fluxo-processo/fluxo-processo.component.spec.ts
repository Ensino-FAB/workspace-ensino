import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxoProcessoComponent } from './fluxo-processo.component';

describe('FluxoProcessoComponent', () => {
  let component: FluxoProcessoComponent;
  let fixture: ComponentFixture<FluxoProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FluxoProcessoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxoProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
