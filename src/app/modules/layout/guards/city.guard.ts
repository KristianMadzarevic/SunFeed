import { WeekDay } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CityGuard implements CanActivate {
  constructor(private router: Router) {}

  /** This guard can cover both cities and days */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    //If route has no city name
    if (!route.params.city) {
      this.router.navigate(['/weather']);
      return false;
    }

    //check day
    if (route.params.day) {
      //Check if the day searched for is yesterday or two days ago ( we only want today and 4 next days)
      let yesterday = new Date(
        new Date().setDate(new Date().getDate() - 1)
        ).toLocaleDateString('en-EN', { weekday: 'short' });
        let dayBeforeYesterday = new Date(
          new Date().setDate(new Date().getDate() - 2)
          ).toLocaleDateString('en-EN', { weekday: 'short' });
      if (route.params.day === dayBeforeYesterday || route.params.day === yesterday) {
        this.router.navigate(['/weather']);
        return false;
      }
      //Check if the day is one of the days in the week
      let dayInRoute = route.params.day;
      if (!this.checkDay(dayInRoute)) {
        this.router.navigate(['/weather']);
        return false;
      }
    }

    //Check city
    let cityInRoute = route.params.city.toLowerCase();
    let cities = JSON.parse(localStorage.getItem('CITIES')!);
    if (
      cities.find((e: { name: string }) => e.name.toLowerCase() === cityInRoute)
    ) {
      return true;
    }
    this.router.navigate(['/weather']);
    return false;
  }

  /**
   * Check if any weekday starts with the sent string
   * @param dayInRoute Day to check
   * @returns True if dayInRoute is a day in a week
   */
  public checkDay(dayInRoute: string) {
    for (let day in WeekDay) {
      if (typeof WeekDay[day] === 'string') {
        if (WeekDay[day].slice(0, 3).startsWith(dayInRoute)) return true;
      }
    }
    return false;
  }
}
