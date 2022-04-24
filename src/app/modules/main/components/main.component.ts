import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/global.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { SHOW_HIDE_ANIMATION } from 'src/app/shared/animations/show-hide';
import { MatModalComponent } from 'src/app/shared/components/mat-modal/mat-modal.component';
import { DIALOG_DATA } from 'src/app/shared/models/dialog-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [SHOW_HIDE_ANIMATION],
})
export class MainComponent implements OnInit {
  inputCityName: string = '';
  cities: any[] = [];
  constructor(
    private _global: GlobalService,
    private _weather: WeatherService,
    private _modal: MatDialog
  ) {}

  ngOnInit(): void {
    this.cities = this.getCities();
  }

  public getCities() {
    return this._global.selectedCities;
  }

  public addCity() {
    if (this.inputCityName) {
      //Get the city info
      this._weather.getWeatherByCityName(this.inputCityName).subscribe(
        (data) => {
          //Add the city
          const cityAdded = this._global.addCity(data);
          //Clear the input field
          this.inputCityName = '';
          if (!cityAdded) this.cityAlreadyExists();
          this.cities = this._global.selectedCities;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  public cityAlreadyExists() {
    console.log('Already exists!');
  }

  public deleteAllCities() {
    if(!this.cities || this.cities.length === 0) return;
    //Prepare options
    const modalOptions = new MatDialogConfig();
    const dialogData: DIALOG_DATA = {
      modalTitleText: 'BRISANJE',
      contentTitleText: 'Želite li obrisati sve gradove?',
      contentText: '',
    };
    modalOptions.data = dialogData;

    const logoutModalRef = this._modal.open(MatModalComponent, modalOptions);
    logoutModalRef.afterClosed().subscribe((result) => {
      if (result) {
        this._global.deleteAllCities();
        this.cities = this._global.selectedCities;
      }
    });

  }
}
