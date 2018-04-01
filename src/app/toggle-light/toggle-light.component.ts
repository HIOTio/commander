import { Component, OnInit, Input } from '@angular/core';
import { CommandService } from '../command.service';
@Component({
  selector: 'app-toggle-light',
  templateUrl: './toggle-light.component.html',
  styleUrls: ['./toggle-light.component.css']
})
export class ToggleLightComponent implements OnInit {
@Input() command;
@Input() label;
@Input() topic;
    resp:any;
  constructor(private cmd: CommandService) { }

  ngOnInit() {
  }
 sendCommand(topic,command){
     this.cmd.sendCommand(topic,command,{}).subscribe(data=>{
         this.resp=data;
      });
 }
}
