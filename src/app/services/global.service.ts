import { Injectable } from '@angular/core';
import { WeatherService } from './weather/weather.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  selectedCities: any[] = [];
  selectedCityHourlyData: any;
  selectedDay: any;
  dayIndex: number = 0;
  favCities: any[] = [];


  constructor(private _weather: WeatherService) {
    //Retreive cities from the localStorage
    let cities = localStorage.getItem('CITIES');
    if (cities) {
      this.selectedCities = JSON.parse(cities);
      this.refreshCities();
    }
    let day = localStorage.getItem('SELECTED_DAY');
    if (day) {
      this.selectedDay = JSON.parse(day);
    }
    let hourlyData = localStorage.getItem('SELECTED_DAY_HOURLY_DATA');
    if(hourlyData) {
      this.selectedCityHourlyData = JSON.parse(hourlyData);
    }
    let dayIndex = localStorage.getItem('SELECTED_DAY_INDEX');
    if(dayIndex) {
      this.dayIndex = parseInt(dayIndex);
    }
    let favCities = localStorage.getItem('FAVORITE_CITIES');
    if(favCities) {
      this.favCities = JSON.parse(favCities);
      this.refreshFavs();
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
   * Get data for all the cities added to main screen
   */
  public refreshFavs(){
    for(let city of this.favCities) {
      this._weather.getWeatherByCityCoords(city.coord.lat, city.coord.lon).subscribe(
        (data) => {
          this.favCities[this.favCities.indexOf(city)] = data;
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
    const cityIndex = this.selectedCities.indexOf(this.selectedCities.find(e=> e.name === city.name));
    this.selectedCities.splice(cityIndex,1);
    this.saveCities();
  }

  /**
   * Add a city to the fav screen and LS
   * @param city City object to be added
   * @returns boolean (city added or not)
   */
  public addFavCity(city: any): boolean{
    if(this.favCities.find(e=> e.name === city.name)) return false;
    this.favCities = [...this.favCities, city];
    this.saveCities();
    return true;
  }

  /**
   * Delete a city from the fav screen and from the local storage
   * @param city
   */
  public deleteFavCity(city:any) {
    const cityIndex = this.favCities.indexOf(this.favCities.find(e=> e.name === city.name));
    this.favCities.splice(cityIndex,1);
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
    localStorage.setItem('FAVORITE_CITIES', JSON.stringify(this.favCities));
  }

  public selectDay(day: any, cityData: any, dayIndex:number) {
    this.selectedDay = day;
    this.selectedCityHourlyData = cityData;
    this.dayIndex = dayIndex;
    localStorage.setItem('SELECTED_DAY',JSON.stringify(day));
    localStorage.setItem('SELECTED_DAY_HOURLY_DATA',JSON.stringify(cityData));
    localStorage.setItem('SELECTED_DAY_INDEX',JSON.stringify(dayIndex));
  }
}
