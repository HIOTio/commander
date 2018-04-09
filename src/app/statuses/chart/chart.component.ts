import { StatusService } from '../../status.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {Chart, ChartData, Point} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {
  canvas: any;
  ctx: any;
    @Input()
  status;
  constructor(private _statusService: StatusService) {}


  ngOnInit() {
    this.status.legend = this._statusService.parseText(this.status.legend);
  }
  ngAfterViewInit() {
    this.canvas = document.getElementById('chart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ['min: ' + this.status.min, '18.0', 'max: ' + this.status.max + ' ' + this.status.legend],
          datasets: [{
            label: '# of Votes',
            data: [17.9, 0.1, 32],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }]
      },
      options: {
        responsive: false,
        rotation: -1.0 * Math.PI,
        circumference: Math.PI,
        display: true
      }
    });
  }
}
