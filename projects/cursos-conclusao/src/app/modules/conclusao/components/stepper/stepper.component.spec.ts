import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconModule } from '@cca-fab/cca-fab-components-common';

import { StepperComponent } from './stepper.component';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  let mockMap;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperComponent],
      imports: [IconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    mockMap = {
      first: 'active',
      second: 'disabled',
      third: 'disabled',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value on change', () => {
    const onChangeSpy = jest.spyOn(component, 'onChange');
    component.map = mockMap;

    component.changed.subscribe((res) => {
      expect(res).toBe(1);
    });

    component.onChange(1);

    expect(onChangeSpy).toHaveBeenCalled();
  });

  // it('should not emit value on change if selection is disabled', () => {
  //   const onChangeSpy = jest.spyOn(component, 'onChange');
  //   const mockFn = jest.fn((res) => {});

  //   component.map = mockMap;
  //   component.changed.subscribe(mockFn);

  //   component.onChange(2);

  //   expect(mockFn).not.toHaveBeenCalled();
  //   expect(onChangeSpy).toHaveBeenCalled();
  // });
});
