import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { SHOW_HIDE_ANIMATION } from 'src/app/shared/animations/show-hide';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [SHOW_HIDE_ANIMATION],
})
export class MainComponent implements OnInit {
  inputCityName: string = '';
  cities: any[] = [];
  constructor(
    private _global: GlobalService,
    private _weather: WeatherService
  ) {}

  ngOnInit(): void {
    this.cities = this.getCities();
  }

  public getCities() {
    return this._global.selectedCities;
  }

  public addCity() {
    if (this.inputCityName) {
      //Get the city info
      this._weather.getWeatherByCityName(this.inputCityName).subscribe(
        (data) => {
          //Add the city
          const cityAdded = this._global.addCity(data);
          //Clear the input field
          this.inputCityName = '';
          if(!cityAdded) this.cityAlreadyExists();
          this.cities = this._global.selectedCities;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  public cityAlreadyExists() {
    console.log('Already exists!');
  }

  public deleteAllCities() {
    this._global.deleteAllCities();
  }
}
