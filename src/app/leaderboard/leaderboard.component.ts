import { Component, Input, OnChanges,  OnInit,  SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IDay } from '../db/models/idate';
import { ILeaderboard, ILeaderboardDay} from '../db/models/ileaderboard';
import { HttpRequestService } from '../services/http-request.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class TabInfoComponent implements  OnInit {

  @Input() public today!: IDay;  
  leaderboard!: ILeaderboardDay[];
  

  constructor(
    private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
  //   this.httpRequestService.getLeaderboard(this.date.date).subscribe((leaderboard) => {
  //       this.leaderboard = leaderboard;
  //     });
  // console.log("ontoday", this.today.date);
  
  }
  ngOnChanges(){
    this.getDate(this.today.date)
    
  }
  getDate(date: string){
    this.httpRequestService.getLeaderboard(date).subscribe( {
      next: (leader) => {
        this.leaderboard = leader
        console.log("next", this.leaderboard)
        console.log(date)
      }
    }    
    );
  }
   
}
