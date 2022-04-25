import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() city: any;
  favCities: any[] = [];

  constructor(private _global: GlobalService, private _weather: WeatherService) { }

  public deleteCity() {
    this._global.deleteCity(this.city);
  }

  public addFavCity() {
    //Get the city info
    this._weather.getWeatherByCityName(this.city.name).subscribe(
      (data) => {
        //Add the city
        this._global.addFavCity(data);
        this.favCities = this._global.favCities;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public deleteFavCity() {
    this._global.deleteFavCity(this.city);
    this.favCities = this._global.favCities;
  }

  public isFavorite(): boolean {
    return this._global.favCities.find(e => e.name === this.city.name);
  }
}
