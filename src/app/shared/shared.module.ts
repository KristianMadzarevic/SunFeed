import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { CardComponent } from './components/card/card.component';
import { IfChangesDirective } from './directives/if-changes.directive';


@NgModule({
  declarations: [WeatherInfoComponent, CardComponent, IfChangesDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    WeatherInfoComponent,
    CardComponent,
    IfChangesDirective,
  ],
})
export class SharedModule {}
