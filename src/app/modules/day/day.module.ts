import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayRoutingModule } from './day-routing.module';
import { DayComponent } from './day/day.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DayComponent
  ],
  imports: [
    CommonModule,
    DayRoutingModule,
    SharedModule
  ]
})
export class DayModule { }
