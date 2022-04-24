import { Injectable } from '@angular/core';
import { WeatherService } from './weather/weather.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  selectedCities: any[] = [];

  constructor(private _weather: WeatherService) {
    //Retreive cities from the localStorage
    let cities = localStorage.getItem('CITIES');
    if (cities) {
      this.selectedCities = JSON.parse(cities);
      this.refreshCities();
    }
  }

  /**
   * Get data for all the cities added to main screen
   */
  public refreshCities(){
    for(let city of this.selectedCities) {
      this._weather.getWeatherByCityCoords(city.coord.lat, city.coord.lon).subscribe(
        (data) => {
          this.selectedCities[this.selectedCities.indexOf(city)] = data;
          this.saveCities();
        }
      )
    }
  }

  /**
   * Add a city to the main screen and to local storage
   * @param city City object to be added
   * @returns boolean (city added or not)
   */
  public addCity(city: any): boolean{
    if(this.selectedCities.find(e=> e.name === city.name)) return false;
    this.selectedCities = [...this.selectedCities, city];
    this.saveCities();
    return true;
  }

  /**
   * Delete a city from the main screen and from the local storage
   * @param city
   */
  public deleteCity(city:any) {
    const cityIndex = this.selectedCities.indexOf(city);
    this.selectedCities.splice(cityIndex,1);
    this.saveCities();
  }
  /**
   * Delete all cities from the main screen and from the local storage
   * @param city
   */
  public deleteAllCities() {
    this.selectedCities = [];
    this.saveCities();
  }

  /** Save cities to local storage */
  public saveCities() {
    localStorage.setItem('CITIES', JSON.stringify(this.selectedCities));
  }
}
