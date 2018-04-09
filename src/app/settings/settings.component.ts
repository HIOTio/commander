import {SettingsService} from '../settings.service';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings = {server: ''};

  constructor(private _settingsService: SettingsService) {}

  ngOnInit() {
    this.settings.server = this._settingsService.getItem('server');
  }
  saveSettings() {
  this._settingsService.saveSettings('server', this.settings.server);
    console.log('settings updated:' + this.settings.server);
  }
}
