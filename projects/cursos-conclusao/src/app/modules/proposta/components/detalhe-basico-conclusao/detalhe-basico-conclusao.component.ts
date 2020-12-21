import { PropostaResponse } from './../../../../models/proposta-response.model';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Proposta } from 'projects/cursos-conclusao/src/app/models/proposta.model';
import { fadeIn } from 'projects/ensino-commons/src/public-api';

@Component({
  selector: 'app-detalhe-basico-conclusao',
  templateUrl: './detalhe-basico-conclusao.component.html',
  styleUrls: ['./detalhe-basico-conclusao.component.scss'],
  animations: [fadeIn()],
})
export class DetalheBasicoConclusaoComponent implements OnInit {
  @Input() header: string;
  @Input() header2: string;
  @Input() proposta: PropostaResponse;
  @Input() loading: boolean;

  isOpen = { value: false };

  constructor() {}

  ngOnInit(): void {}

  closed(): void {}

  confirm(): void {
    this.toggleOpen();
  }

  toggleOpen(): void {
    this.isOpen.value = !this.isOpen.value;
  }
}
