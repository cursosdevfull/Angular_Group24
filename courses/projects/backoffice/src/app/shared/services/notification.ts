import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

type INotification = {
  show: (message: string, miliseconds: number) => void;
};

@Injectable({ providedIn: 'root' })
export class Notification implements INotification {
  private readonly snackBar: MatSnackBar = inject(MatSnackBar);

  show(message: string, miliseconds: number = 2000): void {
    this.snackBar.open(message, '', {
      duration: miliseconds,
    });
  }
}
