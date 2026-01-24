import { Component, Inject } from "@angular/core";
import { ListProducts } from "../list-products/list-products";
import { ProductService } from "../services/product.service";
import { MyClass, MyOwnClass } from "../app.config";
import { AlertService } from "../modules/alerts/alert.module";
import { StaffService } from "../modules/staff/staff.module";

@Component({
    selector: "display",
    templateUrl: "./my-component.html",
    styleUrls: ["./my-component.css"],
    imports: [ListProducts],
    /*     providers: [
            {
                provide: "MyService",
                useClass: ProductService
            }
        ] */
})
export class MyComponent {
    public name = "Juan"

    constructor(
        private productService: ProductService,
        @Inject(MyOwnClass) private myOwnClass: MyClass,
        @Inject("environment") public environment: string,
        @Inject("API") private apiInfo: { url: string; authorizationType: string; appType: string },
        private alertService: AlertService,
        private staffService: StaffService
    ) {
        console.log(this.myOwnClass.getName());
        console.log("Environment:", this.environment);
        console.log("API Info:", this.apiInfo);
        this.alertService.showAlert("MyComponent initialized!");
        console.log("Staff Info:", this.staffService.getStaff());
    }
}