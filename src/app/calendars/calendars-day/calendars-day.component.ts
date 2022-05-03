import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IDate, IDay } from 'src/app/db/models/idate';

@Component({
  selector: 'app-cards-day',
  templateUrl: './calendars-day.component.html',
  styleUrls: ['./calendars-day.component.scss']
})
export class CardsDayComponent implements OnInit {
  @Input() day!: IDay;
  @Input() cards!: IDate;

  @Input() index!: number;
  @Output('activeDateChanged') public activateDay: EventEmitter<any> =
    new EventEmitter<any>();

  
  @Input() currentDate!: string;

  days!: Observable<IDay[]>;
  data!: IDate;



  constructor() { }

  ngOnInit(): void {
  }

  onDayClick() {
    this.activateDay.emit(this.index);
    console.log(this.index)
  }

}
