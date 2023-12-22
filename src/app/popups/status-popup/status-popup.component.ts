import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-status-popup',
  templateUrl: './status-popup.component.html',
  styleUrls: ['./status-popup.component.css']
})
export class StatusPopupComponent {
  text = '';

  constructor(private dialogRef: MatDialogRef<StatusPopupComponent>) {
    dialogRef.disableClose = true;
  }

}
