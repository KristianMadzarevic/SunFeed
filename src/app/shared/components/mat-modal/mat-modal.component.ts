import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DIALOG_DATA } from '../../models/dialog-data';

@Component({
  selector: 'app-mat-modal',
  templateUrl: './mat-modal.component.html',
  styleUrls: ['./mat-modal.component.scss']
})
export class MatModalComponent implements OnInit {

  modalTitleText: string|undefined;
  contentTitleText: string|undefined;
  contentText: string|undefined;

  constructor(@Inject(MAT_DIALOG_DATA) data: DIALOG_DATA) {
    //Load data
    this.modalTitleText = data.modalTitleText;
    this.contentTitleText = data.contentTitleText;
    this.contentText = data.contentText;
   }

  ngOnInit(): void {
  }

}
