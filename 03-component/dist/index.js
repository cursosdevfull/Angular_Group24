var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Component(parameters) {
    return function (target) {
        const instance = new target();
        const container = document.querySelector(parameters.selector);
        const name = instance.name;
        const lastname = instance.lastname;
        const age = instance.age;
        if (container) {
            container.innerHTML = `
            <h1>${name} ${lastname}</h1>
            <p>Age: ${age}</p>
        `;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "John";
        this.lastname = "Doe";
        this.age = 30;
    }
};
Person = __decorate([
    Component({
        selector: "#container"
    }),
    __metadata("design:paramtypes", [])
], Person);
//const person = new Person("John", "Doe", 30);
