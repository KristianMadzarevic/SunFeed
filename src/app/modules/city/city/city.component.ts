import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { SHOW_ANIMATION } from 'src/app/shared/animations/show';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  animations: [SHOW_ANIMATION],
})
export class CityComponent implements OnInit, OnDestroy {
  /** Name of the city */
  city: string = '';
  /** Weather data to display */
  fiveDaysWeather: any;
  /** City data */
  cityData: any;
  /** subscription for router changes with same id */
  routerSub: Subscription = new Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _weather: WeatherService,
    private _global: GlobalService,
    private router: Router
  ) {
    //When route changes, refresh city data
    this.routerSub = this.router.events.subscribe(
      (event: Event) => {
        if(event instanceof NavigationEnd){
          this.ngOnInit();
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  ngOnInit(): void {
    //Get the name of the city from the route
    this.city = this.activatedRoute.snapshot.paramMap.get('city') || '';
    //Make the first letter of a city name capital


    //Load data from global service
    this.cityData = this._global.selectedCities.find(
      (e) => e.name.toLowerCase() === this.city.toLowerCase()
    );
    const lat = this.cityData.coord.lat;
    const lon = this.cityData.coord.lon;
    //Retreive the forecast from openweathermap.org for seven days, slice to 5 in html
    this._weather.getWeatherForFiveDays(lat, lon).subscribe((data) => {
      this.fiveDaysWeather = data;
    });
  }

  /**
   * Converts a unix timestamp to Date object
   * @param dt unix timestamp
   * @returns Date object with dt date
   */
  getDayOfWeek(dt: number): Date {
    return new Date(dt * 1000);
  }

  /**
   * Converts a unix timestamp to Date object
   * @param dt unix timestamp
   * @returns Date object with dt date
   */
   getNameOfDay(dt: number): string {
    return new Date(dt * 1000).toLocaleDateString('en-EN', {weekday:'short'});
  }

  printDay(day: string) {
    console.log(day)
  }
}
