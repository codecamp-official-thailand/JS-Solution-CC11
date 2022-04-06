
// Lab 4.33
let str = 'I live in Thailand';
const splited = str.toLowerCase().split('');
console.log(splited);
const result = {};
for (let i = 0; i < splited.length; i++) {
  if (splited[i] !== ' ') {
    if (result[splited[i]]) {
      result[splited[i]] = result[splited[i]] + 1;
    } else {
      result[splited[i]] = 1;
    }
  }
}
console.log(result);

const result1 = splited.reduce((acc, el) => {
  if (el !== ' ') {
    if (acc[el]) {
      acc[el] = acc[el] + 1;
    } else {
      acc[el] = 1;
    }
  }
  return acc;
}, {});
console.log(result1);
