// Lab 4.17
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];
// expected result: { name: 'cherries', quantity: 5 }
const result = inventory.find(function (el) {
  return el.name === 'cherries';
});
console.log(result);
