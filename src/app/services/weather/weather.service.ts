import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OPEN_WEATHER_API_KEY } from 'src/app/shared/constants/open-weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  myKey = OPEN_WEATHER_API_KEY;

  constructor(private http: HttpClient) {}

  /**
   * Get weather for only one city
   * @param query City that the API should look for
   * @returns data of the city's weather
   */
  getWeatherByCityName(query: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${this.myKey}`
    );
  }

  /**
   * Get weather for only one city using it's coords
   * @param lat Latitude of the city
   * @param lon Longitude of the city
   * @returns data of the city's weather
   */
  getWeatherByCityCoords(lat: string, lon: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.myKey}`
    );
  }

  /**
   * Get weather for one city for 5 days
   * @param query City that the API should look for
   * @returns data
   */
  getWeatherForFiveDays(lat: string, lon: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely&units=metric&appid=${this.myKey}`
    );
  }
}
