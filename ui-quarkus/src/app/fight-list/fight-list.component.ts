import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

import { Fight, FightService } from '../shared';

@Component({
  selector: 'app-fight-list',
  templateUrl: './fight-list.component.html',
  styleUrls: ['./fight-list.component.sass'],
})
export class FightListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fightDate', 'winnerName', 'loserName'];
  dataSource: any = MatTableDataSource<Fight>;

  constructor(
    private fightService: FightService,
    private httpClient: HttpClient
  ) {
    this.dataSource = new MatTableDataSource<Fight>();
    fightService.emitter.subscribe((fight) => {
      const data = this.dataSource.data;
      data.unshift(fight);
      this.dataSource.data = data;
    });
  }

  ngOnInit(): void {
    this.fightService.apiFightsGet().subscribe((fights) => {
      this.dataSource.data = fights.reverse();
    });
  }
}
