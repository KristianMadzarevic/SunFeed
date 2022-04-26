import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  favCities: any[] = [];

  constructor(
    private _global: GlobalService,
    private _weather: WeatherService,
    private _modal: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cities = this._global.selectedCities;
    this.favCities = this._global.favCities;
  }

  /** If there is already more than 10 cities, ask for confirmation */
  public checkLength() {
    if (!this.inputCityName) return;
    this.cities.length >= 10 ? this.confirmAddingModalShow() : this.addCity();
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
          if (!cityAdded) this.cityAlreadyExistsModal();
          this.cities = this._global.selectedCities;
        },
        (error) => {
          this._snackBar.open('Nepostojeći grad', '', {
            duration: 2000,
          });
        }
      );
    }
  }

  public cityAlreadyExistsModal() {
    //Prepare options
    const modalOptions = new MatDialogConfig();
    const dialogData: DIALOG_DATA = {
      modalTitleText: 'GREŠKA',
      contentTitleText: 'Ovaj grad je već dodan',
      contentText: '',
    };
    modalOptions.data = dialogData;

    this._modal.open(MatModalComponent, modalOptions);
  }

  public deleteAllCities() {
    if (!this.cities || this.cities.length === 0) return;
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

  public confirmAddingModalShow() {
    //Prepare options
    const modalOptions = new MatDialogConfig();
    const dialogData: DIALOG_DATA = {
      modalTitleText: 'DODAVANJE',
      contentTitleText: 'Želite li dodati još jedan grad?',
      contentText: 'Već imate više od 9 gradova!',
    };
    modalOptions.data = dialogData;

    const logoutModalRef = this._modal.open(MatModalComponent, modalOptions);
    logoutModalRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addCity();
      }
    });
  }
}
