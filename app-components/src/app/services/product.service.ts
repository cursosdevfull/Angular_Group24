import { Inject, Injectable } from "@angular/core";

export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
}
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private cart: IProduct[] = [];

    private readonly products: Array<IProduct> = [
        { id: 1, title: 'Pan Francés', description: 'Pan crujiente por fuera y suave por dentro, ideal para el desayuno peruano', price: 0.50 },
        { id: 2, title: 'Pan de Molde', description: 'Pan suave y esponjoso, perfecto para sándwiches y tostadas', price: 4.50 },
        { id: 3, title: 'Pan Ciabatta', description: 'Pan artesanal de corteza crujiente y miga alveolada', price: 6.00 },
        { id: 4, title: 'Empanada de Pollo', description: 'Masa crujiente rellena de pollo guisado con especias peruanas', price: 3.50 },
        { id: 5, title: 'Empanada de Carne', description: 'Deliciosa empanada rellena de carne de res con cebolla y huevo', price: 3.80 },
        { id: 6, title: 'Suspiro a la Limeña', description: 'Postre tradicional limeño con manjar blanco y merengue', price: 5.00 },
        { id: 7, title: 'Picarones', description: 'Dulce tradicional hecho con zapallo y camote, bañado en miel', price: 4.00 },
        { id: 8, title: 'Churros Rellenos', description: 'Churros crujientes rellenos de manjar blanco o chocolate', price: 2.50 },
        { id: 9, title: 'Alfajor de Maicena', description: 'Galletas suaves rellenas de manjar blanco y coco rallado', price: 2.00 },
        { id: 10, title: 'Torta Helada', description: 'Bizcocho con frutas confitadas y crema pastelera', price: 8.00 },
        { id: 11, title: 'Tres Leches', description: 'Bizcocho empapado en tres tipos de leche con canela', price: 6.50 },
        { id: 12, title: 'Pan de Yema', description: 'Pan dulce tradicional enriquecido con yemas de huevo', price: 1.50 },
        { id: 13, title: 'Rosquitas de Manteca', description: 'Galletas tradicionales crujientes con sabor a anís', price: 3.00 },
        { id: 14, title: 'Mazamorra Morada', description: 'Postre tradicional hecho con maíz morado y frutas', price: 4.50 },
        { id: 15, title: 'Arroz con Leche', description: 'Postre cremoso de arroz cocido en leche con canela', price: 3.50 },
        { id: 16, title: 'Pan Chancay', description: 'Pan tradicional de la costa peruana, suave y esponjoso', price: 1.00 },
        { id: 17, title: 'Empanada de Queso', description: 'Empanada horneada rellena de queso fresco y hierbas', price: 3.20 },
        { id: 18, title: 'Buñuelos', description: 'Masa frita esponjosa espolvoreada con azúcar y canela', price: 2.80 },
        { id: 19, title: 'Pan de Pascua', description: 'Pan dulce tradicional con frutas confitadas y pasas', price: 12.00 },
        { id: 20, title: 'Turrón de Doña Pepa', description: 'Dulce tradicional con chancaca, ajonjolí y grageas de colores', price: 8.50 },
        { id: 21, title: 'Pan Integral', description: 'Pan nutritivo hecho con harina integral y semillas', price: 5.00 },
        { id: 22, title: 'Queque Inglés', description: 'Bizcocho tradicional con frutas confitadas y brandy', price: 15.00 },
        { id: 23, title: 'Empanada de Ají de Gallina', description: 'Empanada rellena del tradicional ají de gallina peruano', price: 4.00 },
        { id: 24, title: 'Pan de Hamburguesa', description: 'Pan suave especial para hamburguesas con semillas de sésamo', price: 2.00 },
        { id: 25, title: 'Cocadas', description: 'Dulces de coco rallado con leche condensada', price: 1.50 },
        { id: 26, title: 'Pan de Anís', description: 'Pan aromático tradicional con semillas de anís', price: 2.50 },
        { id: 27, title: 'Empanada de Espinaca', description: 'Empanada vegetariana rellena de espinaca y ricotta', price: 3.50 },
        { id: 28, title: 'Bizcocho de Naranja', description: 'Bizcocho esponjoso con ralladura y jugo de naranja', price: 7.00 },
        { id: 29, title: 'Pan de Hot Dog', description: 'Pan alargado suave perfecto para hot dogs', price: 1.80 },
        { id: 30, title: 'Mil Hojas', description: 'Delicado postre de masa hojaldre con crema pastelera', price: 6.00 }
    ]

    getProducts(): Array<IProduct> {
        return this.products;
    }

    addProductToCart(productId: number) {
        const product = this.products.find(p => p.id === productId);

        if (product) {
            this.cart.push(product);
        }
    }

    getPriceTotal(): number {
        return this.cart.reduce((total, product) => total + product.price, 0);
    }

    getCart(): Array<IProduct> {
        return this.cart;
    }
}