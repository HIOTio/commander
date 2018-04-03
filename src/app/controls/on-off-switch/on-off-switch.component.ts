import { Component, OnInit ,Input } from '@angular/core';
import { CommandService } from '../../command.service';

@Component({
  selector: 'app-on-off-switch',
  templateUrl: './on-off-switch.component.html',
  styleUrls: ['./on-off-switch.component.css']
})
export class OnOffSwitchComponent implements OnInit {
@Input() command;
@Input() label;
@Input() topic;
    resp:any;
  constructor(private _cmd: CommandService) { }

  ngOnInit() {
  }
 sendCommand(topic,command){
     this._cmd.sendCommand(topic,command,{}).subscribe(data=>{
         this.resp=data;
      });
 }
}

