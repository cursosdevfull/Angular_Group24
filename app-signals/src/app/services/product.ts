import { Injectable, signal } from '@angular/core';
import { TCart, TProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private $products = signal<TProduct[]>([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 500 },
    { id: 4, name: 'Monitor', price: 300 },
    { id: 5, name: 'Keyboard', price: 50 },
    { id: 6, name: 'Mouse', price: 30 },
    { id: 7, name: 'Headphones', price: 100 },
    { id: 8, name: 'Smartwatch', price: 200 },
    { id: 9, name: 'Printer', price: 150 },
    { id: 10, name: 'Webcam', price: 70 },
    { id: 11, name: 'Speaker', price: 90 },
    { id: 12, name: 'Microphone', price: 60 },
    { id: 13, name: 'External HDD', price: 110 },
    { id: 14, name: 'USB Drive', price: 25 },
    { id: 15, name: 'Router', price: 80 },
    { id: 16, name: 'Charger', price: 40 },
    { id: 17, name: 'Projector', price: 400 },
    { id: 18, name: 'Camera', price: 350 },
    { id: 19, name: 'Game Console', price: 500 },
    { id: 20, name: 'VR Headset', price: 600 },
  ]);
  products = this.$products.asReadonly();

  private $cart = signal<TCart>([]);
  cart = this.$cart.asReadonly();

  addToCart(product: TProduct) {
    const currentCart = this.cart();
    const itemIndex = currentCart.findIndex((item) => item.product.id === product.id);
    if (itemIndex > -1) {
      currentCart[itemIndex].quantity += 1;
    } else {
      currentCart.push({ product, quantity: 1 });
    }
    this.$cart.set([...currentCart]);
  }

  removeFromCart(productId: number) {
    const currentCart = this.cart().filter((item) => item.product.id !== productId);
    this.$cart.set([...currentCart]);
  }
}
