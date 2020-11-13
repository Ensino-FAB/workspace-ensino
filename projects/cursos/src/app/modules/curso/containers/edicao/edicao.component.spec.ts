import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdicaoComponent } from './edicao.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  ButtonModule,
  FormModule,
  InputModule,
  LabelModule,
  SelectModule,
  TextareaModule,
} from '@cca-fab/cca-fab-components-common';

describe('EdicaoComponent', () => {
  let component: EdicaoComponent;
  let fixture: ComponentFixture<EdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdicaoComponent],
      imports: [
        NoopAnimationsModule,
        OverlayModule,
        ButtonModule,
        FormModule,
        InputModule,
        LabelModule,
        SelectModule,
        TextareaModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
