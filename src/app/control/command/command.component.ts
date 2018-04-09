import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  @Input()
    command;
  constructor() { }

  ngOnInit() {
  }

}
