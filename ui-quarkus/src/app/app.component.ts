import { Component } from '@angular/core';

export interface PeriodicElement {
  fightDate: string;
  id: number;
  winner: string;
  looser: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    fightDate: 'Sep 18, 2022, 3:52:06 PM',
    winner: 'Gogeta (Dragon Ball Super)',
    looser: 'Heat Wave',
  },
  {
    id: 2,
    fightDate: 'Sep 17, 2022, 6:39:19 PM',
    winner: 'Saint Of Killers',
    looser: 'Genesis',
  },
  {
    id: 3,
    fightDate: 'Sep 17, 2022, 6:39:12 PM',
    winner: 'Darth Sidious (RotJ)',
    looser: 'Steve Trevor',
  },
  {
    id: 4,
    fightDate: 'Sep 17, 2022, 6:39:05 PM',
    winner: 'Onslaught',
    looser: 'Black Canary (CW)',
  },
  {
    id: 5,
    fightDate: 'Sep 17, 2022, 6:25:53 PM',
    winner: 'Annihilus',
    looser: 'Shikamaru',
  },
  {
    id: 6,
    fightDate: 'Sep 17, 2022, 6:25:53 PM',
    winner: 'Galadriel',
    looser: 'Darth Vader',
  },
  {
    id: 7,
    fightDate: 'Sep 17, 2022, 6:25:53 PM',
    winner: 'Chewbacca',
    looser: 'Buuccolo',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'fightDate', 'winner', 'looser'];
  dataSource = ELEMENT_DATA;
  title = 'ui-quarkus';
  titleComponent = 'Welcome to Super Heroes Fight!';
}
