import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { Fighters, FightService, Hero, Villain } from '../shared';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.sass'],
})
export class FightComponent implements OnInit {
  figthers: Fighters = new Fighters();
  winner: any;
  fighterPicture: string = '';
  panelOpenState = false;

  constructor(private http: HttpClient, private fightService: FightService) {}

  ngOnInit(): void {
    this.newFighters();
  }

  fight() {
    this.fightService.apiFightsPost(this.figthers).subscribe((fight) => {
      this.fightService.onNewFight(fight);
      this.winner = fight.winnerName;
    });
  }

  newFighters() {
    this.winner = null;
    this.fightService
      .apiFightsRandomfightersGet()
      .subscribe((figthers) => (this.figthers = figthers));
  }
}
