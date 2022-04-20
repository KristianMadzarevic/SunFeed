import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  city = this.activatedRoute.snapshot.paramMap.get('city');

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
}
