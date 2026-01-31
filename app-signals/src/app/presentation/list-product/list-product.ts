import { Component, effect, inject, ViewEncapsulation } from '@angular/core';
import { ProductApplication } from '../../application/product-application';
import { TProduct } from '../interfaces/product';
import { Product } from '../product/product';

@Component({
  selector: 'app-list-product',
  imports: [Product],
  templateUrl: './list-product.html',
  styleUrl: './list-product.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [ProductApplication],
})
export class ListProduct {
  application = inject(ProductApplication);

  products = this.application.getProducts();
  cart = this.application.getCart();

  constructor() {
    effect(() => {
      console.log(`Productos en el carrito: ${this.cart()}`);
    });
  }

  addToCart(product: TProduct) {
    this.application.addToCart(product);
  }
}
