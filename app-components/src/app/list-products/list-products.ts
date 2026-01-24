import { Component, Inject } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-products',
  imports: [Product],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css'
})
export class ListProducts {
  constructor(private productService: ProductService) { }

  addToCart(productId: number) {
    this.productService.addProductToCart(productId);
  }

  getTotalPrice() {
    return this.productService.getPriceTotal();
  }

  getProducts() {
    return this.productService.getProducts();
  }

  getCart() {
    return this.productService.getCart();
  }
}