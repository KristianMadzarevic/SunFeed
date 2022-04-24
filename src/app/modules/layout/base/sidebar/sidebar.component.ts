import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  @Output() hide = new EventEmitter<void>()
  constructor(private _global: GlobalService) {}

  ngOnInit(): void {}

  getCities() {
    return this._global.selectedCities;
  }

  public logoutModalShow() {

  }

  public hideSidebar() {
    this.hide.emit();
  }
}
