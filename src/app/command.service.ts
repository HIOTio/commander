import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from './settings.service';
@Injectable()
export class CommandService {

    constructor(private _http: HttpClient, private _settingsService: SettingsService) {

    }
    getCommands(): Observable<any> {
        return this._http.get(this._settingsService.getItem("server") + "/cmdList");
    }
    sendCommand(topic,command,params): Observable<any>{
        return this._http.get(this._settingsService.getItem("server") + "/cmd/" + topic + "/" + command + "/" + JSON.stringify(params));
           
    }
}
