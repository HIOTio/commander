import {StatusService} from '../../status.service';
import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {
  @Input()
  status;

  constructor(private _statusService: StatusService) {}


  ngOnInit() {
    this.status.legend = this._statusService.parseText(this.status.legend);
  }
  getTemp(value) {
    return value  + '\xB0C';
  }
}
