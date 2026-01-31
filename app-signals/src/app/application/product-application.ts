import { Inject, inject, Injectable } from '@angular/core';
import { ProductService } from '../adapters/product';
import { ProductPort } from '../ports/product-port';
import { TProduct } from '../presentation/interfaces/product';

@Injectable()
export class ProductApplication {
  port: ProductPort = inject(ProductService);

  getProducts() {
    return this.port.products;
  }

  getCart() {
    return this.port.cart;
  }

  addToCart(product: TProduct) {
    this.port.addToCart(product);
  }

  removeFromCart(productId: number) {
    this.port.removeFromCart(productId);
  }
}
