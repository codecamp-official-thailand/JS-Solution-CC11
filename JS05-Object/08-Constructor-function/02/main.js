function Accumulator(startingValue) {
  // this = {}

  this.currentValue = startingValue;

  this.read = function () {
    // #1
    // const num = +prompt('Enter number');
    // this.currentValue += num; // this.currentValue = this.currentValue + num
    // #2
    this.currentValue += +prompt('Enter number');
  };

  this.show = function () {
    alert(this.currentValue);
  };
  // return this
}

const acc = new Accumulator(10); // { currentValue: 10 }
console.log(acc);