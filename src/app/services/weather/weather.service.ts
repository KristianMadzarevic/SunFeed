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
   * @returns data
   */
  getWeatherByCityName(query: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${this.myKey}`
    );
  }
}
