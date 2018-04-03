import { Component, OnInit } from '@angular/core';
import { CommandService } from '../command.service';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
    commands: any;
    resp: any;
    constructor(private cmdList: CommandService) { }
    ngOnInit() {
        this.cmdList.getCommands().subscribe( 
            data=>{
                this.commands=data;
                console.log(data);
            });
  }

}
