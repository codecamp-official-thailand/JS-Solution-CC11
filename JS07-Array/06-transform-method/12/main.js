
// Lab 4.34
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];
const result = [];
for (let i = 0; i < flattened.length; i++) {
  result.push(...flattened[i]);
}
console.log(result);

const result1 = flattened.reduce((acc, el) => {
  acc.push(...el);
  return acc;
}, []);
console.log(result1);
