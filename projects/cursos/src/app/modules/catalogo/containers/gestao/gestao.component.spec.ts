import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestaoComponent } from './gestao.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule } from '@cca-fab/cca-fab-components-common';

describe('GestaoComponent', () => {
  let component: GestaoComponent;
  let fixture: ComponentFixture<GestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestaoComponent],
      imports: [ButtonModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
