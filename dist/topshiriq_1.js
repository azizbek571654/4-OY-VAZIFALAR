"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`${this.brand} ${this.model} (${this.year}) ishga tushdi.`);
    }
}
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("BMW", "X5", 2022);
const car3 = new Car("Chevrolet", "Malibu", 2018);
car1.start();
car2.start();
car3.start();
