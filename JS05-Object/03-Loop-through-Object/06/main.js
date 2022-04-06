
const name = prompt('Enter product name');
const amount = +prompt('Enter product amount');
const unitPrice = +prompt('Enter unit price');
const discount = +prompt('Enter discount');

const product = {
  name,
  amount,
  unitPrice
};

if (discount > 0) {
  product.discount = discount;
}

const calcPrice = obj => (obj.amount * obj.unitPrice * (100 - obj.discount)) / 100;
console.log(product);
console.log(calcPrice(product));