class GeometricShape {
  constructor(type, color, area) {
    this.type = type;
    this.color = color;
    this.area = area;
    this._perimeter = 0;
  }

  get info() {
    return `Type: ${this.type}, Color: ${this.color}, Area: ${this.area}`;
  }

  set perimeter(value) {
    this._perimeter = value;
  }

  get perimeter() {
    return this._perimeter;
  }
}

class Circle extends GeometricShape {
  constructor(color, radius) {
    super("Circle", color);
    this.radius = radius;
    this.perimeter = this.calculatePerimeter();
    this.area = this.calculateArea();
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends GeometricShape {
  constructor(color, width, height) {
    super("Rectangle", color);
    (this.width = width), (this.height = height);
    this.area = this.calculateArea();
    this.perimeter = this.calculatePerimeter();
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle("blue", 9);
console.log(circle.info);
console.log(`Circle perimeter: ${circle.perimeter}`);

const rectangle = new Rectangle("green", 10, 7);
console.log(rectangle.info);
console.log(`Rectangle perimeter: ${rectangle.perimeter}`);
