import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommandService {

    constructor(private _http: HttpClient) {

    }
    getCommands(): Observable<any> {
        return this._http.get("http://192.168.1.4:3001/cmdList");
    }
    sendCommand(topic,command,params): Observable<any>{
        return this._http.get("http://192.168.1.4:3001/cmd/" + topic + "/" + command + "/" + JSON.stringify(params));
           
    }
}
