import { SelectOption } from '@cca-fab/cca-fab-components-common/types/select';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ConclusaoFacade } from '../../conclusao.facade';

@Component({
  selector: 'app-cadastro-step1',
  templateUrl: './cadastro-step1.component.html',
  styleUrls: ['./cadastro-step1.component.scss'],
})
export class CadastroStep1Component implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];
  capacitacaoOptions: SelectOption[] = [];
  options: SelectOption[] = [];
  @Output() next = new EventEmitter();
  @Input() form: FormGroup;

  constructor(private facade: ConclusaoFacade) {}

  ngOnInit(): void {
    this.reload();
  }

  reload(search = {}): void {
    this.capacitacaoOptions = [];
    this.subs$.push(
      this.facade.capacitacaoService.findAll(search).subscribe((response) => {
        response.content.map((capacitacao) => {
          this.capacitacaoOptions.push({
            name: capacitacao.codigo + ' - ' + capacitacao.nome,
            value: capacitacao.id,
          });
        });
        this.options = [...this.capacitacaoOptions];
      })
    );
  }

  filter(value): any {
    return this.capacitacaoOptions.filter((option: any | null) =>
      typeof option === 'string'
        ? option.toLowerCase().includes(value.toLowerCase())
        : option.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  update(value: any[]) {
    this.options.splice(0, this.options.length, ...value);
    return this.options;
  }

  // filter(event): void {
  //   const cursoName: string = event;

  //   if (cursoName.length > 3) {
  //     this.reload({ nome: cursoName });
  //   }
  // }

  onSubmit(): void {}

  onNext() {
    this.next.emit(this.form.value);
  }

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
