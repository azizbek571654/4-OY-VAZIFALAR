abstract class Shape {
    abstract getArea(): number;
  }
  
  class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  const circle = new Circle(5);
  console.log("Doira yuzi:", circle.getArea());
  
  const rectangle = new Rectangle(4, 6);
  console.log("Tortburchak yuzi:", rectangle.getArea());
  