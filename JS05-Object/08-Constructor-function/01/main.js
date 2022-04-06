//Lab 3.20
function Calculator() {
  this.number1 = 0;
  this.number2 = 0;

  this.read = function () {
    this.number1 = +prompt('Enter number 1');
    this.number2 = +prompt('Enter number 2');
  };

  this.sum = function () {
    return this.number1 + this.number2;
  };

  this.mul = function () {
    return this.number1 * this.number2;
  };
}

const calculator = new Calculator();
const calculator1 = new Calculator();
const calculator2 = new Calculator();
const calculator3 = new Calculator();

console.log(calculator);