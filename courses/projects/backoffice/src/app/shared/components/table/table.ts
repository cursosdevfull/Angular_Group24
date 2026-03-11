import {
  Component,
  contentChildren,
  effect,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { MatColumnDef, MatTable, MatTableModule } from '@angular/material/table';
import { MetaColumns } from '../../../core/interfaces';
import { Scrollbar } from '../scrollbar/scrollbar';

@Component({
  selector: 'cdev-table',
  imports: [MatTableModule, Scrollbar],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  onUpdateTrigger = output<any>();
  metaColumns = input.required<MetaColumns>();
  data = input.required<any[]>();
  table = viewChild.required<MatTable<any>>(MatTable);
  columnDefs = contentChildren<MatColumnDef>(MatColumnDef);

  displayColumns = signal<string[]>([]);

  constructor() {
    effect(() => {
      const metaCols = this.metaColumns().map((col) => col.field);
      const projectedMetaCols = this.columnDefs().map((colDef) => colDef.name);
      this.displayColumns.set([...metaCols, ...projectedMetaCols]);

      this.columnDefs().forEach((colDef) => {
        this.table().addColumnDef(colDef);
      });
    });
  }

  triggerUpdate(data: any) {
    this.onUpdateTrigger.emit(data);
  }
}
