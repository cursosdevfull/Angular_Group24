import { Component, inject } from '@angular/core';
import { CartItem } from '../cart-item/cart-item';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-cart',
  imports: [CartItem],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  productService = inject(ProductService);

  cartItems = this.productService.cart;

  removeItem(productId: number) {
    this.productService.removeFromCart(productId);
  }
}
