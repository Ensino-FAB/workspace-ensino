import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheConclusaoContainerComponent } from './detalhe-conclusao-container.component';

describe('DetalheConclusaoContainerComponent', () => {
  let component: DetalheConclusaoContainerComponent;
  let fixture: ComponentFixture<DetalheConclusaoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheConclusaoContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheConclusaoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
