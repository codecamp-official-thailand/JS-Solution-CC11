// Lab 3.6
const sales = [{ price: 1000, discount: 0.1 }, { price: 500, discount: 0.05 }, { price: 100 }];

const summary = [];
for (let item of sales) {
  if (item.discount) {
    summary[summary.length] = { netPrice: item.price * (1 - item.discount) };
  } else {
    summary[summary.length] = { netPrice: item.price }
  }
}