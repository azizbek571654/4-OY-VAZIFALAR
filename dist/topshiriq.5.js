"use strict";
class Shape {
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
console.log("Doira yuzi:", circle.getArea());
const rectangle = new Rectangle(4, 6);
console.log("Tortburchak yuzi:", rectangle.getArea());
