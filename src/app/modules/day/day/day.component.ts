import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { SHOW_ANIMATION } from 'src/app/shared/animations/show';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
  animations: [SHOW_ANIMATION]
})
export class DayComponent implements OnInit {
  dayData: any;
  dayName: string;
  dayIndex: number

  constructor(private _global: GlobalService, private route: ActivatedRoute) {
    this.dayName = new Date(this._global.selectedDay.dt * 1000).toLocaleDateString('en-EN', { weekday: 'long' });
    this.dayData = this._global.selectedCityHourlyData;
    this.dayIndex = this._global.dayIndex;
    //Prepare dayData for selected day (only first and second days have actual data)
    const startOfSlice = this.dayIndex * 24;
    const endOfSlice = (this.dayIndex + 1) * 24;
    this.dayData = this.dayData.slice(startOfSlice, endOfSlice);

   }

  ngOnInit(): void {}

  /**
   * Format time to extract hours and minutes
   * @param dt time from API
   * @returns correct time format
   */
  getTime(dt: any) {
    return new Date(dt * 1000);
  }

}
