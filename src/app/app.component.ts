import { Component, OnInit } from '@angular/core';
import {
  RouterLink
} from '@angular/router';
import {SettingsService } from './settings.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  isCollapsed: boolean = true;
  constructor (private _settingsService: SettingsService ){}

  menuItems = [
    {
      url: '/',
      icon: 'dashboard',
      text: 'Dashboard'
    },
    {
      url: '/control',
      icon: 'play_arrow',
      text: 'Control'
    },
    {
      url: '/status',
      icon: 'donut_small',
      text: 'Status'
    }
  ];
  title = 'HIOT Commander';
  collapsed(event: any): void {
  }
  expanded(event: any): void {
  }
  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit(){
    console.log(this._settingsService.getItem("server"));
  }
}
