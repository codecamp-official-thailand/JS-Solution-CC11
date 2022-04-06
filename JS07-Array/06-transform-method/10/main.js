// Lab 4.32
let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
let result = {};
for (let i = 0; i < names.length; i++) {
  if (result[names[i]]) {
    result[names[i]] = result[names[i]] + 1;
  } else {
    result[names[i]] = 1;
  }
}
console.log(result);

const result1 = names.reduce((acc, el) => {
  if (acc[el]) {
    acc[el] = acc[el] + 1;
  } else {
    acc[el] = 1;
  }
  return acc;
}, {});
console.log(result1);
