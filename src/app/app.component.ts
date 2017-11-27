import { Component } from '@angular/core';
import { MaterialModule } from './material/material.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
      url: '/data',
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
  go(url) {

  }
}
