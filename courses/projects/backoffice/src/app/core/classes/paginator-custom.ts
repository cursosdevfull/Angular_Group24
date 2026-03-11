import { MatPaginatorIntl } from '@angular/material/paginator';

export class PaginatorCustom extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Items por página';
  override firstPageLabel = 'Primera página';
  override lastPageLabel = 'Última página';
  override nextPageLabel = 'Siguiente página';
  override previousPageLabel = 'Página anterior';

  override getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }
    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };
}
