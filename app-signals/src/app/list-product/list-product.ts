import { Component, effect, inject, ViewEncapsulation } from '@angular/core';
import { TProduct } from '../interfaces/product';
import { Product } from '../product/product';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-list-product',
  imports: [Product],
  templateUrl: './list-product.html',
  styleUrl: './list-product.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ListProduct {
  productService = inject(ProductService);

  products = this.productService.products;
  cart = this.productService.cart;

  constructor() {
    effect(() => {
      console.log(`Productos en el carrito: ${this.cart()}`);
    });
  }

  addToCart(product: TProduct) {
    this.productService.addToCart(product);
  }
}
