import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
providedIn: 'root',
})
export class TranslateConfigService {
  private _translateType$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private translateService: TranslateService) {
    this.translateService.use('geo');
    this._translateType$.next('geo');
  }

  changeLanguage(type: string) {
    this.translateService.use(type);
    this._translateType$.next(type)
  }
  translateType$(): Observable<any>{
    return this._translateType$.asObservable()
  }
}