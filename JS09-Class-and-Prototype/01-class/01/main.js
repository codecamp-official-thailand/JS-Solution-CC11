// Lab 5.1
class Calculator {
  value = 0;

  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  sum(number) {
    this.value += number;
    return this;
  }

  multiply(number) {
    this.value *= number;
    return this;
  }

  subtract(number) {
    this.value -= number;
    return this;
  }

  divide(number) {
    this.value /= number;
    return this;
  }

  show() {
    console.log(this.value);
    return this;
  }
}

const calc = new Calculator(10);
// calc.sum(5);
// calc.subtract(7);
// calc.multiply(4);
// calc.divide(2);
// calc.show();

calc.sum(4).subtract(9).divide(3).show();