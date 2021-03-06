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
import { MatDialogModule } from '@angular/material/dialog';
import { MatModalComponent } from './components/mat-modal/mat-modal.component';
import { DayHRPipe } from './pipes/day-hr.pipe';
import { MatConfirmModalComponent } from './components/mat-confirm-modal/mat-confirm-modal.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoCitiesComponent } from './components/no-cities/no-cities.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    WeatherInfoComponent,
    CardComponent,
    IfChangesDirective,
    MatModalComponent,
    DayHRPipe,
    MatConfirmModalComponent,
    NoCitiesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
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
    MatDialogModule,
    DayHRPipe,
    MatTooltipModule,
    NoCitiesComponent,
    MatSnackBarModule,
  ],
})
export class SharedModule {}
