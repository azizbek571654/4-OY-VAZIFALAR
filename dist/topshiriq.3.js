"use strict";
function identity(value) {
    return value;
}
console.log(identity(100));
console.log(identity("Hello World"));
console.log(identity({ name: "Ali", age: 25 }));
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    print() {
        console.log(this.items);
    }
}
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.print();
console.log(numberStack.pop());
const stringStack = new Stack();
stringStack.push("A");
stringStack.push("B");
stringStack.print();
console.log(stringStack.pop());
