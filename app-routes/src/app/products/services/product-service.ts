import { signal } from '@angular/core';

export class ProductService {
  products = signal<Array<{ id: number; name: string; price: number }>>([
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 150 },
    { id: 3, name: 'Product C', price: 200 },
  ]);
}
