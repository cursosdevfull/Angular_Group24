import { Component, effect, input, output } from '@angular/core';
import { TProduct } from '../interfaces/product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  //@Input() product!: TProduct;
  product = input.required<TProduct>();
  //@Output() onAddToCart = new EventEmitter<TProduct>();
  onAddToCart = output<TProduct>();

  constructor() {
    effect(() => {
      console.log(`Product changed: ${this.product().name} - $${this.product().price}`);
    });
  }

  addCart() {
    this.onAddToCart.emit(this.product());
  }
}
