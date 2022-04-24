import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoCitiesComponent } from './components/no-cities/no-cities.component';

@NgModule({
  declarations: [MainComponent, NoCitiesComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
