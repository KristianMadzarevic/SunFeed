import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { SHOW_ANIMATION } from 'src/app/shared/animations/show';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  animations: [SHOW_ANIMATION]
})
export class FavoriteComponent implements OnInit {

  favCities: any[] = [];
  favCitiesFiveDaysData: any[] = [];

  constructor(private _global: GlobalService, private _weather: WeatherService) {
    this.favCities = this._global.favCities;
   }

  ngOnInit(): void {
    for(let city of this.favCities){
      this._weather.getWeatherForFiveDays(city.coord.lat, city.coord.lon).subscribe(
        data => {
          this.favCitiesFiveDaysData.push(data);
        }
      )
    }
  }

  public getCityName(lat: string, lon: string) {
    return this.favCities.find(e=> e.coord.lat === lat && e.coord.lon === lon).name;
  }

  /**
   * Converts a unix timestamp to Date object
   * @param dt unix timestamp
   * @returns Date object with dt date
   */
   getDayOfWeek(dt: number): Date {
    return new Date(dt * 1000);
  }
}
