import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatModalComponent } from 'src/app/shared/components/mat-modal/mat-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { DIALOG_DATA } from 'src/app/shared/models/dialog-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() hide = new EventEmitter<void>();
  constructor(private _global: GlobalService, private _modal: MatDialog, private router: Router, private _auth: AuthService) {}

  ngOnInit(): void {}

  getCities() {
    return this._global.selectedCities;
  }

  /** Show logout modal for user to confirm */
  public logoutModalShow() {
    //Prepare options
    const modalOptions = new MatDialogConfig();
    const dialogData: DIALOG_DATA = {
      modalTitleText: 'ODJAVA',
      contentTitleText: 'Želite li se odjaviti?',
      contentText:''
    }
    modalOptions.data = dialogData;

    const logoutModalRef = this._modal.open(MatModalComponent, modalOptions);
    logoutModalRef.afterClosed().subscribe(
      result => {
        if(result) {
          this._auth.logOut();
          this.router.navigate(['/auth/login']);
        }
      }
    )
  }

  public hideSidebar() {
    this.hide.emit();
  }

}
