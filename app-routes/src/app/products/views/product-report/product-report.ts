import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-report',
  imports: [],
  templateUrl: './product-report.html',
  styleUrl: './product-report.scss',
})
export class ProductReport {
  productService = inject(ProductService);

  products = this.productService.products;
}
