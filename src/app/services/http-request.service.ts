import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DBService } from "../db/db.service";
import { IDate, IDay } from "../db/models/idate";
import { ILeaderboardDay } from "../db/models/ileaderboard";
import { ITicketDay, ITickets } from "../db/models/iticket";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  currentLang: string = 'geo';

  // 'api/GetDates'
  // 'api/GetTickets'
  // 'api/GetMissions'
  // 'api/GetLeaderboardDates'
  // 'api/GetLeaderboard'
  private _isLoaded = false;
  constructor(
    private dbService: DBService
  ) {
    this.dbService.isLoaded$
      .subscribe(() => {
        this._isLoaded = true;
      });
  }
  
  getData(): Observable<IDate> {
    return this.dbService.httpGet('api/GetDates');
  }
  getLeaderboardDates(): Observable<IDate> {
    return this.dbService.httpGet('api/GetLeaderboardDates');
  }

  getLeaderboard(date: string): Observable<ILeaderboardDay[]>{
    return this.dbService.httpGet('api/GetLeaderboard', { date });
  }
  getTickets(date: string): Observable<ITicketDay[]> {
    return this.dbService.httpGet('api/GetTickets', { date });
  }
  // getTickets(): Observable<ITickets> {
  //   return this.dbService.httpGet('api/GetTickets');
  // }
}
