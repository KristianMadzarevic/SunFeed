import { Component, OnInit } from '@angular/core';
import { SHOW_HIDE_ANIMATION } from 'src/app/shared/animations/show-hide';

@Component({
  selector: 'app-no-cities',
  templateUrl: './no-cities.component.html',
  styleUrls: ['./no-cities.component.scss'],
  animations: [SHOW_HIDE_ANIMATION],
})
export class NoCitiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
