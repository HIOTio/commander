import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './view/status/status.component';
import { ControlComponent } from './view/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularDraggableModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
