import { Component, inject } from '@angular/core';
import { ProductApplication } from '../../application/product-application';
import { CartItem } from '../cart-item/cart-item';

@Component({
  selector: 'app-cart',
  imports: [CartItem],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
  providers: [ProductApplication],
})
export class Cart {
  application = inject(ProductApplication);

  cartItems = this.application.getCart();

  removeItem(productId: number) {
    this.application.removeFromCart(productId);
  }
}
