import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IDay } from '../db/models/idate';
import { ITicketDay } from '../db/models/iticket';
import { HttpRequestService } from '../services/http-request.service';

@Component({
  selector: 'app-player-tab',
  templateUrl: './player-tab.component.html',
  styleUrls: ['./player-tab.component.scss']
})
export class PlayerTabComponent implements OnInit {

  @Input() public today!: IDay;  
  ticket!:  ITicketDay[];

  constructor(
    private httpRequestService: HttpRequestService) { }

  ngOnInit() {
    // this.httpRequestService.getTickets().subscribe((tickets) => {
    //     this.ticket = tickets;
    //   });
  }
  // ngOnChanges(changes: SimpleChanges){
    
  //   this.getDate(this.today.date)
  // }
  // getDate(date: string){
  //   this.httpRequestService.getTickets(date).subscribe( {
  //     next: (ticket) => {
  //       this.ticket = ticket
  //       console.log("next", this.ticket)
  //     }
  //   }    
  //   );
  // }


}
