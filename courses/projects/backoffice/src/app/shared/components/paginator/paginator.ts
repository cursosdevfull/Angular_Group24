import { Component, input, output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'cdev-paginator',
  imports: [MatPaginatorModule, MatButtonModule],
  templateUrl: './paginator.html',
  styleUrl: './paginator.scss',
})
export class Paginator {
  pageSize = input<number>(30);
  length = input<number>(0);
  onChangePage = output<number>();

  changePage(event: PageEvent) {
    this.onChangePage.emit(event.pageIndex);
  }
}
