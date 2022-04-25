import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {


    constructor(private http: HttpClient,) { }

    public getAllCities(): Observable<any> {
      return this.http.get()
    }
}
