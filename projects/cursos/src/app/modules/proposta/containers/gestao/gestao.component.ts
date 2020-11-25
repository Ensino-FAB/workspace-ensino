import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../../../../../../cursos/src/app/app.animation';
import { Subscription } from 'rxjs';
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
