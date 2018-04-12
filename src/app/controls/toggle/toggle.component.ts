import { Component, OnInit, Input } from '@angular/core';
import { CommandService } from '../../command.service';
@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
@Input() command;
    resp: any;
  constructor(private cmd: CommandService) { }

  ngOnInit() {
  }
 sendCommand(topic, command, param) {
     this.cmd.sendCommand(topic, command, param).subscribe(data =>  {
         this.resp = data;
      });
 }
}
