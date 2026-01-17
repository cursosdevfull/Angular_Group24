function Logger(target: Function) {
    console.log("Logging...")
    console.log(target)
}

function Personal(target: any, propertieKey: string) {
    console.log("Personal decorator")
    console.log("p1", target)
    console.log("propertieKey", propertieKey)
    console.log("-------------------")
    console.log("instance", new target.constructor())

    let value: string

    const setter = function (newVal: string) {
        console.log(`Set ${propertieKey} to ${newVal.toUpperCase()}`)
        value = newVal.toUpperCase()
    }

    const getter = function () {
        console.log(`Get ${propertieKey}: ${value}`)
        return value
    }

    Object.defineProperty(target, propertieKey, {
        set: setter,
        get: getter,
        enumerable: true,
        configurable: true,
    })
}

function FormatLowerCase(target: any, context: any, descriptor: PropertyDescriptor) {
    /*     console.log("FormatLowerCase decorator")
        console.log("originalMethod", originalMethod)
        console.log("context", context)
        console.log("descriptor", descriptor) */

    const originalMethodCopy = descriptor.value

    descriptor.value = function (...args: any[]) {
        const result = originalMethodCopy.apply(this, args)
        return result.toLowerCase()
    }

    return descriptor
}

@Logger
class Person {
    name = "Jason"
    @Personal lastname = "Bourne"

    constructor() {
        console.log("Person constructor")
    }

    @FormatLowerCase
    greet() {
        return `Hello, ${this.name} ${this.lastname}`
    }
}

const person = new Person()
console.log("name", person.name.toUpperCase())
console.log("lastname", person.lastname)
console.log(person.greet())