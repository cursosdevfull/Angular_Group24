import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'cdev-confirm',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirm.html',
  styleUrl: './confirm.scss',
})
export class Confirm {
  public message = '¿Are you sure you want to delete this item?';
}
