import { StatusService } from '../status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statuses: any;
  constructor(private _statusService: StatusService) { }

  ngOnInit() {
    this._statusService.getStatus().subscribe(
      data => {
        this.statuses = data;
      });
  }
}
