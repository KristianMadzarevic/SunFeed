import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() city: any;

  constructor(private _global: GlobalService) { }

  public deleteCity() {
    this._global.deleteCity(this.city);
  }
}
