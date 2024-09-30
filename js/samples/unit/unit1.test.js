import { sayHello } from "./unit1";

describe('SayHello Unit Test Suites', () => { // Fonction de callback
    it('should return "Hello, World"', () => {
        expect(sayHello()).toBe("Hello, World")
    })
})

it('should be "Hello, Josh"', () => {
    expect(sayHello("Josh")).toBe("Hello, Josh")
})