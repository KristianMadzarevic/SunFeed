import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  inputCityName: string = '';
  constructor(
    private _global: GlobalService,
    private _weather: WeatherService
  ) {}

  ngOnInit(): void {}

  getCities() {
    return this._global.selectedCities;
  }

  addCity() {
    if (this.inputCityName) {
      //Get the city info
      this._weather.getWeatherByCityName(this.inputCityName).subscribe(
        (data) => {
          console.log(data);
          //Add the city
          this._global.addCity(data);
          //Clear the input field
          this.inputCityName = '';
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
