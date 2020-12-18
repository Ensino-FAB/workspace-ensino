import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletePessoasComponent } from './autocomplete-pessoas.component';

describe('AutocompletePessoasComponent', () => {
  let component: AutocompletePessoasComponent;
  let fixture: ComponentFixture<AutocompletePessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutocompletePessoasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletePessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
