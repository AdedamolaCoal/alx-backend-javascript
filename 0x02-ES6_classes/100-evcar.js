import Car from './10-car';

const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');
const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    return new Car(this[_brand], this[_motor], this[_color], this[_range]);
  }
}
