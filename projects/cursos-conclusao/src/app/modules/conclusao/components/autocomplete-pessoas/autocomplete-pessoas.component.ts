import { trigger, transition, style, animate } from '@angular/animations';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export interface SelectOption {
  id: number;
  type: string; // tipo
  path: string[]; // vazio
  title: string; // descricao
  code: string; // codigoInterno
}

@Component({
  selector: 'app-autocomplete-pessoas',
  templateUrl: './autocomplete-pessoas.component.html',
  styleUrls: ['./autocomplete-pessoas.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '.15s ease-in-out',
          style({ opacity: 1, transform: 'translateY(0px)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0px)' }),
        animate(
          '.15s ease-in-out',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
})
export class AutocompletePessoasComponent implements AfterViewChecked {
  @Input() options: Array<SelectOption> = [
    {
      id: 3,
      type: 'string', // tipo
      path: ['042.745.547-24'], // vazio
      title: 'FERNANDO DE OLIVEIRA TOMASIO',
      code: 'BANT',
    },
  ];
  @Input() invalid: boolean;
  @Input() label = '';

  @Output() changed = new EventEmitter();
  @Output() confirmed = new EventEmitter();
  @Output() textBlurred = new EventEmitter();

  isOpen = false;
  selectedIndex: number = null;

  @Input() selectedItemArvore: SelectOption;

  inputValue = '';

  inputElement: HTMLInputElement;
  optionsParentElement: HTMLUListElement;

  constructor(public el: ElementRef) {}

  /* istanbul ignore next */
  ngAfterViewChecked(): void {
    if (this.isOpen) {
      this.optionsParentElement = this.el.nativeElement.querySelector('ul');
    } else {
      this.optionsParentElement = null;
    }
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.selectedIndex = null;
    this.isOpen = false;

    this.textBlurred.emit();
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const { key } = event;

    let childElement: (index: number) => HTMLLIElement;

    if (this.optionsParentElement) {
      childElement = (index) =>
        this.optionsParentElement.children[index] as HTMLLIElement;
    }

    if (!this.isOpen) {
      return;
    }

    if (key === 'ArrowUp') {
      if (!this.optionsParentElement) {
        return;
      }

      if (this.selectedIndex === null || this.selectedIndex === 0) {
        this.selectedIndex = this.options.length;
      }

      if (!this.selectedIndex || !this.optionsParentElement) {
        return;
      }

      const child = childElement(--this.selectedIndex);

      child.parentElement.parentElement.scroll({
        top: child.offsetTop - child.parentElement.parentElement.offsetTop,
      });

      return;
    }

    if (key === 'ArrowDown') {
      if (!this.optionsParentElement) {
        return;
      }

      if (
        this.selectedIndex === null ||
        this.selectedIndex === this.options.length - 1
      ) {
        this.selectedIndex = -1;
      }

      const child = childElement(++this.selectedIndex);

      child.parentElement.parentElement.scroll({
        top: child.offsetTop - child.parentElement.parentElement.offsetTop,
      });

      return;
    }

    if (key === 'Enter') {
      if (!this.optionsParentElement) {
        return;
      }

      if (
        this.selectedIndex === null ||
        (!this.selectedIndex && !this.optionsParentElement)
      ) {
        return;
      }

      childElement(this.selectedIndex).click();
    }

    if (key === 'Escape') {
      this.inputElement.blur();
      return;
    }
  }

  onChange(value: string) {
    this.inputValue = value;
    this.changed.emit(value);
  }

  selectedItem(index: number) {
    this.selectedIndex = index;
    this.confirmed.emit(this.options[this.selectedIndex]);
    this.inputElement.blur();

    this.selectedItemArvore = this.options[index];

    this.inputValue = '';
    this.inputElement.value = '';
  }
}
