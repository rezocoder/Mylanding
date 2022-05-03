import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IDate, IDay } from 'src/app/db/models/idate';
import { TranslateConfigService } from 'src/app/services-trs/translate-config.service';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { ICardsConfig } from '../abstract/icards.config';


@Component({
selector: 'app-card',
templateUrl: './calendar.component.html',
styleUrls: ['./calendar.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {
  // @Output("selected") public selected: EventEmitter<IDay> = new EventEmitter();
  @Input() public config: ICardsConfig = { size: 'normal' };
  @Input() public data!: IDate;
    // @Output("selected") public selected: EventEmitter<IDay> = new EventEmitter();
  @Output('activeDateChanged') activateInfo: EventEmitter<{ date: IDay; size: string } >=
      new EventEmitter<{ date: IDay; size: string }>();

  @ViewChild('cardBoxRef') cardBoxRef!: ElementRef;
  @ViewChild('cardBoxInnerRef') cardBoxInnerRef!: ElementRef



  days!: Observable<IDay[]>;
  // data!: IDate;
  spaceSlider = 0;
  cardBoxWidth!:number;
  activeIndex!: number ;
  currentIndex!: number ;
  rotateItemToRight = false;
  rotateItemToLeft = false;

  constructor(private translateConfigService: TranslateConfigService) { }



  ngOnInit(): void {
    this.data.days.forEach((item, index) => {
      if(item.isActive) {
        this.activeIndex = index;
        this.currentIndex = index;
        this.activateInfo.emit({
          date:  this.data.days[index],
          size: this.config.size
        });
      }
    });
    console.log(this.data.days.length + 'I am here')
    this.center();
  }


  center() {
    
    if(!(this.activeIndex - 3 <= 0))
    this.spaceSlider = -((this.activeIndex - 4) * 80);
    else this.spaceSlider = 0;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
    }, 1500)
  }

  onRight(){
    if(this.config.size === 'small'){
      if(this.currentIndex > 0 ) {
        this.currentIndex--;
        this.rotateItemToRight = !this.rotateItemToRight;
        setTimeout(() => {
          this.rotateItemToRight = !this.rotateItemToRight
        }, 600)
      };
    } 
    else { 
      const cardBoxWidth = this.cardBoxRef.nativeElement.offsetWidth;
      if(this.isGoingOverBoardLeft()) this.center();
      else this.spaceSlider += 80;
    }
  }

  onLeft(){
    if(this.config.size === 'small') {
      if(this.currentIndex < this.data.days.length - 1 ){
        this.currentIndex++;
        console.log(this.currentIndex)
        this.rotateItemToLeft = !this.rotateItemToLeft;
        setTimeout(() => {
          this.rotateItemToLeft = !this.rotateItemToLeft
        }, 600)
      }
    } 
    else { 
      if(this.isGoingOverBoardRight()) this.spaceSlider = 0;
      else this.spaceSlider -= 80;
      console.log(this.spaceSlider)
    }
  }
  isGoingOverBoardRight(): boolean {
    const cardBoxWidth = this.cardBoxRef.nativeElement.offsetWidth;
    const cardBoxInnerWidth = this.cardBoxInnerRef.nativeElement.scrollWidth;
    return cardBoxInnerWidth - cardBoxWidth < Math.abs(this.spaceSlider) 
  }
  isGoingOverBoardLeft(): boolean {
    return this.spaceSlider >= 0;
  }

  isBlocked(index: number): boolean {
    return this.data.currentDate < this.data.days[index].date;
  }
  onActivateDay(index: any): void {
    console.log('active date', index)
    if(!(this.isBlocked(index))){
      this.data.days[this.activeIndex].isActive = false;
      this.data.days[index].isActive = true;
      this.activeIndex = index;

      //if(this.config.size !== 'small') this.center();
      this.activateInfo.emit({
        date:  this.data.days[index],
        size: this.config.size
      })
    }

  }


}
