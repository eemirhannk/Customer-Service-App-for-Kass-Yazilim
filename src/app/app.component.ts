import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Kass Yazılım Login';

  constructor (private dialogRef : MatDialog) {}

  openDialog() {
    this.dialogRef.open(ModalComponent);
  }
}
