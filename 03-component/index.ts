function Component(parameters: { selector: string }) {
    return function (target: new (...args: any[]) => any) {
        const instance = new target()
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
    }
}

@Component({
    selector: "#container"
})
class Person {
    name: string;
    lastname: string;
    age: number;

    constructor() {
        this.name = "John";
        this.lastname = "Doe";
        this.age = 30;
    }
}

//const person = new Person("John", "Doe", 30);