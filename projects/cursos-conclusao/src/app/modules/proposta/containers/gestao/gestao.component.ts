import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { fadeIn } from '../../../../../../../ensino-commons/src/lib/utils/animation';
import { PropostaFacade } from '../../proposta.facade';

@Component({
  selector: 'app-gestao',
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.scss'],
  animations: [fadeIn()],
})
export class GestaoComponent implements OnInit {
  private subs$: Subscription[] = [];

  data: any[] = [];

  constructor(private facade: PropostaFacade) {}

  ngOnInit(): void {
    this.subs$.push(
      this.facade.getGestaoData().subscribe((res) => {
        console.log(res);
        this.data = res;
      })
    );
  }
}
