



// Lab 4.14
const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

let result = [];
let foundIndex = alphabets.indexOf('a');
do {
  if (foundIndex !== -1) {
    result.push(foundIndex);
    foundIndex = alphabets.indexOf('a', foundIndex + 1);
  }
} while (foundIndex !== -1);
console.log(result);

result = alphabets.reduce((prev, el, index) => {
  if (el === 'a') {
    prev.push(index);
  }
  return prev;
}, []);
console.log(result);
