// Lab 4.35
let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
let result = [];
for (let i = 0; i < alphabets.length; i++) {
  if (!result.includes(alphabets[i])) {
    result.push(alphabets[i]);
  }
}
console.log(result);
const result1 = alphabets.reduce((acc, el) => {
  if (!acc.includes(el)) {
    acc.push(el);
  }
  return acc;
}, []);
console.log(result1);
console.log(Array.from(new Set(alphabets)));
