import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgcFloatButtonModule} from 'ngc-float-button';
import {
  MatCardModule,
  MatButtonModule,
  MatMenuModule
} from '@angular/material';
@NgModule({
  imports: [
    NgcFloatButtonModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    NgcFloatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [
  ]
})
export class MaterialModule { }
