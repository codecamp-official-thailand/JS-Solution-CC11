// Lab 4.36
const products = [
  { id: 1, name: 'Crystal' },
  { id: 4, name: 'Namthip' },
  { id: 5, name: 'Nestle' }
];
let result = {};
for (let i = 0; i < products.length; i++) {
  result[products[i].id] = { name: products[i].name };
}
console.log(result);

// const result1 = products.reduce((acc, el) => {
//   acc[el.id] = { name: el.name };
//   return acc;
// }, {});
// console.log(result1);

const result1 = products.reduce((acc, { id, ...rest }) => {
  return { ...acc, [id]: rest };
}, {});
console.log(result1);
