import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  /*   @Input({ alias: 'titleProduct' }) public title = "Pan de chola"
    @Input() public description = "Pan de chola es un tipo de pan tradicional peruano, conocido por su textura suave y sabor ligeramente dulce. Es un alimento básico en muchas regiones del país y se disfruta en diversas comidas."
    @Input() public price = 3.50
    @Input() public id = 1 */
  @Input() public product!: { id: number; title: string; description: string; price: number }
  @Output() public onAddProduct = new EventEmitter<number>()

  addToCart() {
    this.onAddProduct.emit(this.product.id)
  }
}
