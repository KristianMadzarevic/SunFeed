import { Component, Input, OnInit } from '@angular/core';
import { WEATHER_ICON_IMG_URL } from '../../constants/open-weather';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {
  @Input() dayOfWeek: Date|undefined;
  @Input() minTemp: number = 0;
  @Input() maxTemp: number = 0;
  @Input() cloudCode: string = '';

  iconImgUrl = WEATHER_ICON_IMG_URL;


  constructor() { }

  ngOnInit(): void {
  }

}
