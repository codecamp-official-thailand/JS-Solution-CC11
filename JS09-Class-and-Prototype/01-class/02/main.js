
// Lab 5.2
class Sale {
  constructor(name) {
    this.name = name;
  }

  calcPrice() {
    return (this.amount * (this.price * (1 - this.discount / 100))).toFixed(2);
  }
}

class Beverage extends Sale {
  constructor(name, amount, price, discount) {
    super(name);
    this.amount = amount;
    this.price = price;
    this.discount = discount.slice(0, discount.length - 1);
  }
}

const pepsi = new Beverage('Pepsi', 3, 19, '10%');
console.log(pepsi.calcPrice());