import { Component, computed, effect, linkedSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListProduct } from './list-product/list-product';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListProduct, Cart],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = signal('app-signals');

  operator1 = signal(10);
  operator2 = signal(20);

  sum = computed(() => this.operator1() + this.operator2());
  multiply = linkedSignal(() => this.operator1() * this.operator2());

  constructor() {
    setTimeout(() => {
      console.log('Updating title...');
      //this.title.set('app-signals (updated)');
      //this.title.update((current) => current + ' (new updated)');
      this.title.set('new title');
      this.operator1.update((current) => current + 10);
    }, 3000);

    effect(() => {
      //console.log(`The sum is: ${this.sum()}`);
      console.log(`Title is: ${this.title()}`);
    });

    setTimeout(() => {
      this.multiply.update((current) => current * 1000);
    }, 5000);
  }
}
