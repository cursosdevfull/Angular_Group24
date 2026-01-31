import { Signal } from '@angular/core';
import { TCart, TProduct } from '../presentation/interfaces/product';

export type ProductPort = {
  products: Signal<TProduct[]>;
  cart: Signal<TCart>;
  addToCart(product: TProduct): void;
  removeFromCart(productId: number): void;
};
