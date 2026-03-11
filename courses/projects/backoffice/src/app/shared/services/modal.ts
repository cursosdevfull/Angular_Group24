import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class Modal {
  private readonly service: MatDialog = inject(MatDialog);

  open(component: new (...args: any[]) => any, className: string, data?: any) {
    const reference = this.service.open(component, {
      data,
      disableClose: true,
      panelClass: className,
    });
    return reference.afterClosed();
  }
}
