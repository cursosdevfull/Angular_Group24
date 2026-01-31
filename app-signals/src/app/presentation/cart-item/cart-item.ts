import { Component, input, output } from '@angular/core';
import { TCartItem } from '../interfaces/product';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItem {
  //@Input() product!: TProduct;
  cartItem = input<TCartItem | undefined>(undefined);
  onRemove = output<number>();
  //@Output() onAddToCart = new EventEmitter<TProduct>();
  //onAddToCart = output<TProduct>();

  removeItem(id: number) {
    this.onRemove.emit(id);
  }
}
