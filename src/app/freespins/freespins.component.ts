import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateConfigService } from '../services-trs/translate-config.service';

@Component({
  selector: 'app-freespins',
  templateUrl: './freespins.component.html',
  styleUrls: ['./freespins.component.scss']
})
export class TextboxComponent implements OnInit {
  language!:  string;
  translateSubscription!: Subscription;
    constructor(
      private translate: TranslateConfigService,
      private translateConfigService: TranslateConfigService) {}
  ngOnInit(): void {
    this.translateSubscription = this.translateConfigService.translateType$().subscribe((type) => {
      this.language = type
    })
  }

  // changeDefaultLanguage(langType: string){
  //   this.translate.changeLanguage(langType);
  // }
  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }
}
