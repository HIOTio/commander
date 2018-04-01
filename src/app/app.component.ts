import { Component } from '@angular/core';
import {
  RouterLink
} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isCollapsed: boolean = true;


  menuItems = [
    {
      url: '/dashboard',
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
    },
    {
      url: '/settings',
      icon: 'build',
      text: 'Settings'
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
}
