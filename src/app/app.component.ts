import { Component, OnInit } from '@angular/core';
import { ICardsConfig } from './calendars/abstract/icards.config';
import { DBService } from './db/db.service';
import { IDate, IDay } from './db/models/idate';
import { IBetslip } from './db/models/iticket';
import { TranslateConfigService } from './services-trs/translate-config.service';
import { HttpRequestService } from './services/http-request.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BetLive';
  betslip!: IBetslip[];
  "dt" = 'ds'
  //countryList:{name:String, code:String}[]=countries;
  playerDataDates: ICardsConfig = {
    size: 'normal'
  }

  leaderboardDates: ICardsConfig = {
    size: 'small'
  }
  playerData?: IDate;
  leaderboardDate?: IDate;

  playerDay!: IDay;
  leaderboardDay!: IDay;
  constructor(
    private httpRequestService: HttpRequestService
  ) {}

  ngOnInit() {
    this.httpRequestService.getData()
      .subscribe(data => this.playerData = data);
    this.httpRequestService.getLeaderboardDates()
      .subscribe(leaderboard => this.leaderboardDate = leaderboard);

    // this.leaderboardDay.isActive = true
  }

  onLeaderboardDateChanged(event: any) {
    console.log(event);
    this.leaderboardDay = event.date;
  }
  onPlayerDateChanged(event: any){
    console.log(event);
    this.playerDay = event.date;
  }


 
}
