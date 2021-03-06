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
import { PropostaFacade } from '../../proposta.facade';

@Component({
  selector: 'app-cadastro-step1',
  templateUrl: './cadastro-step1.component.html',
  styleUrls: ['./cadastro-step1.component.scss'],
})
export class CadastroStep1Component implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  capacitacaoOptions: SelectOption[] = [];

  @Output() next = new EventEmitter();
  @Input() form: FormGroup;

  constructor(private facade: PropostaFacade) {}

  ngOnInit(): void {
    this.reload();
  }

  reload(search = {}): void {
    this.capacitacaoOptions = [];
    this.subs$.push(
      this.facade.capacitacaoService.findAll(search).subscribe((response) =>
        response.content.map((proposta) => {
          this.capacitacaoOptions.push({
            name: proposta.nome + ' - ' + proposta.codigo,
            value: proposta.id,
          });
        })
      )
    );
  }

  confirmed(event): void {}

  filter(event): void {
    const cursoName: string = event;

    if (cursoName.length > 3) {
      this.reload({ nome: cursoName });
    }
  }

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
