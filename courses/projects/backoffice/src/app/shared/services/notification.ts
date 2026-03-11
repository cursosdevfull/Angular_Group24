import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Confirm } from '@shared/components/confirm/confirm';
import { Observable } from 'rxjs';

type INotification = {
  show: (message: string, miliseconds: number) => void;
  confirm: (message?: string) => Observable<string | null>;
};

@Injectable({ providedIn: 'root' })
export class Notification implements INotification {
  private readonly snackBar: MatSnackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);

  show(message: string, miliseconds: number = 2000): void {
    this.snackBar.open(message, '', {
      duration: miliseconds,
    });
  }

  confirm(message: string = 'Are you sure you want to delete this item?'): Observable<any> {
    const reference = this.dialog.open(Confirm, {
      data: { message },
    });

    reference.componentInstance.message = message;
    return reference.afterClosed();
  }
}
