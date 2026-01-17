var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Logger(target) {
    console.log("Logging...");
    console.log(target);
}
function Personal(target, propertieKey) {
    console.log("Personal decorator");
    console.log("p1", target);
    console.log("propertieKey", propertieKey);
    console.log("-------------------");
    console.log("instance", new target.constructor());
    let value;
    const setter = function (newVal) {
        console.log(`Set ${propertieKey} to ${newVal.toUpperCase()}`);
        value = newVal.toUpperCase();
    };
    const getter = function () {
        console.log(`Get ${propertieKey}: ${value}`);
        return value;
    };
    Object.defineProperty(target, propertieKey, {
        set: setter,
        get: getter,
        enumerable: true,
        configurable: true,
    });
}
function FormatLowerCase(target, context, descriptor) {
    /*     console.log("FormatLowerCase decorator")
        console.log("originalMethod", originalMethod)
        console.log("context", context)
        console.log("descriptor", descriptor) */
    const originalMethodCopy = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethodCopy.apply(this, args);
        return result.toLowerCase();
    };
    return descriptor;
}
let Person = class Person {
    constructor() {
        this.name = "Jason";
        this.lastname = "Bourne";
        console.log("Person constructor");
    }
    greet() {
        return `Hello, ${this.name} ${this.lastname}`;
    }
};
__decorate([
    Personal,
    __metadata("design:type", Object)
], Person.prototype, "lastname", void 0);
__decorate([
    FormatLowerCase,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Person.prototype, "greet", null);
Person = __decorate([
    Logger,
    __metadata("design:paramtypes", [])
], Person);
const person = new Person();
console.log("name", person.name.toUpperCase());
console.log("lastname", person.lastname);
console.log(person.greet());
