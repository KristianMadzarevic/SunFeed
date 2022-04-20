import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  selectedCities: any[] = [];

  constructor() {
    let cities = localStorage.getItem('CITIES');
    if (cities) {
      this.selectedCities = JSON.parse(cities);
    }
  }

  addCity(city: any) {
    this.selectedCities = [...this.selectedCities, city];
    localStorage.setItem('CITIES', JSON.stringify(this.selectedCities));
  }
}
