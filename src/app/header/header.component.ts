import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateConfigService } from '../services-trs/translate-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private translate: TranslateConfigService,
    private translateConfigService: TranslateConfigService
  ) { }

  ngOnInit(): void {
  }

  hStyle = "";
  spacePosition = "";

  toEng() {
    this.spacePosition = "to-eng";
  }

  toGeo() {
    this.spacePosition = "to-geo";
  }


  @HostListener("document: scroll")
  scrollFn() {
    if(document.documentElement.scrollTop > 10) {
      this.hStyle = 'header-bg';
    } else if(document.documentElement.scrollTop < 10) {
      this.hStyle = '';
    }
  }

   changeDefaultLanguage(langType: string){
    this.translate.changeLanguage(langType);
  }
}
