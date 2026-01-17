import { Component } from "@angular/core";
import { ListProducts } from "../list-products/list-products";

@Component({
    selector: "display",
    templateUrl: "./my-component.html",
    styleUrls: ["./my-component.css"],
    imports: [ListProducts],
})
export class MyComponent {
    public name = "Juan"
}