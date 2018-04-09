import {Component, OnInit} from '@angular/core';
import {CommandService} from '../command.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  viewGroup='';
  commands: {cmds: [any], groups: any[]};
  resp: any;
    getCommand(group, commandId): void {
    this.commands.cmds.forEach((cmd) =>  {
      if (cmd.cmd === commandId) {
        group.cmds.push(cmd);
      }
    });
  }
  constructor(private cmdList: CommandService) {}
  ngOnInit() {
    this.cmdList.getCommands().subscribe(
      data => {
        this.commands = data;
        this.commands.groups.forEach((group) =>  {
          group.cmds = [];
          group.commands.forEach((command) =>{
            this.getCommand(group, command);
          });
        });
      });
  }
    setGroup(group) {
    this.viewGroup = group;
  }
}


