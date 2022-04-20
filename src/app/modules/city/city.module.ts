import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [CityComponent],
  imports: [CommonModule, CityRoutingModule],
})
export class CityModule {}
