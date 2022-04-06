
// Lab 3.4
function isNumber(num) {
  const strInput = '' + num; // String(num)
  if (!strInput.trim()) {
    return false;
  }
  return !isNaN(strInput);
}

let input;
const arr = [];

do {
  input = prompt('Enter number');
  if (isNumber(input)) {
    arr[arr.length] = +input;
  }
} while (isNumber(input));

let sum = 0;
for (let el of arr) {
  sum += el;
}
console.log(sum);
