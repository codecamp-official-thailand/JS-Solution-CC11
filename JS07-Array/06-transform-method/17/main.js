// Lab 4.39
let str = '31 45 12 67 34 86 23 37 19 41';
const result = str
  .split(' ')
  .filter(el => el < 40)
  .reduce((acc, el) => acc + +el, 0);
console.log(result);
