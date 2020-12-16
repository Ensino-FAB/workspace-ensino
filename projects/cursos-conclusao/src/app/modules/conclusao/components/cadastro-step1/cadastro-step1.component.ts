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
import { Router } from '@angular/router';
import { ToastService } from 'projects/ensino-commons/src/public-api';
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

  @Output() next = new EventEmitter();
  @Input() form: FormGroup;

  constructor(private facade: ConclusaoFacade) {}

  ngOnInit(): void {
    // const search = {
    //   ...this.conclusaoSearch.value,
    //   page: this.page ? this.page - 1 : 0,
    //   size: this.pageSize,
    //   sort: this.orderBy.map((item) => (this.asc ? item : item + ',desc')),
    // };

    this.reload();
  }

  reload(search = {}): void {
    this.capacitacaoOptions = [];
    this.subs$.push(
      this.facade.capacitacaoService.findAll(search).subscribe((response) =>
        response.content.map((capacitacao) => {
          this.capacitacaoOptions.push({
            name: capacitacao.codigo + ' - ' + capacitacao.nome,
            value: capacitacao.id,
          });
        })
      )
    );
  }

  confirmed(event): void {
    console.log(typeof event);
  }

  filter(event): void {
    this.reload({ nome: event });
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
