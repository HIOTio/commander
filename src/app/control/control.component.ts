import {Component, OnInit} from '@angular/core';
import {CommandService} from '../command.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  viewGroup = '';
  groupName = '';
  flatGroups = [];
  commands: {cmds: [any], groups: any[]};
  resp: any;
  getCommand(group, commandId): void {
    this.commands.cmds.forEach((cmd) => {
      if (cmd.cmd === commandId) {
        group.cmds.push(cmd);
      }
    });
  }
  constructor(private cmdList: CommandService) {}
  ngOnInit() {
    this.cmdList.getCommands().subscribe(
      data => {
        console.log(data);
        this.commands = data;
        this.commands.groups.forEach((group) => {
          this.flatGroups.push(group);
          group.cmds = [];
          if (group.groups) {
            // iterate through each subgroup
            group.groups.forEach((subGroup) => {
              subGroup.cmds = [];
              this.flatGroups.push(subGroup);
              subGroup.commands.forEach((command) => {
                this.getCommand(subGroup, command);

              });
            });
          }
          group.commands.forEach((command) => {
            this.getCommand(group, command);
          });
        });
      });
  }
  setGroup(group) {
    this.viewGroup = group.group;
    this.groupName = group.name;
  }
}


