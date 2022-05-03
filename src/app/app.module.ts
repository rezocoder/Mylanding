
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextboxComponent } from './freespins/freespins.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './calendars/calendar/calendar.component';
import { CardsDayComponent } from './calendars/calendars-day/calendars-day.component';
import { TabInfoComponent } from './leaderboard/leaderboard.component';
import { PlayerTabComponent } from './player-tab/player-tab.component';

// import { SwiperModule } from 'ngx-swiper-wrapper';

export function rootLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
  }
  
@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    HeaderComponent,
    CardComponent,
    CardsDayComponent,
    TabInfoComponent,
    PlayerTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: rootLoaderFactory,
      deps: [HttpClient],
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
