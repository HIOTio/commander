import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from './settings.service';
@Injectable()
export class StatusService {

    constructor(private _http: HttpClient, private _settingsService: SettingsService) {

    }
    getStatus(): Observable<any> {
        return this._http.get(this._settingsService.getItem('server') + '/statusList');
    }
   parseText(legendText: String) {
    let outText: String;
    // replace characters based on the following
    /*
     *  <degC> -> °C
     *  <degF> -> °F
     *  ....
     */
    outText = legendText;
    outText = outText.replace('<degC>', '\xB0C');
    outText = outText.replace('<degF>', '\xB0F');
    return outText;
  }
}
