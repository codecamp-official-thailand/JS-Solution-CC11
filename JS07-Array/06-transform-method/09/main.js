
// Lab 4.31
let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
let max = arr[0],
  min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(max);
console.log(min);

const initialValue = [arr[0], arr[0]];
const initialValue = { max: arr[0], min: arr[0] };

const result = arr.reduce((acc, el) => {
  if (acc.max < el) {
    acc.max = el;
  }
  if (acc.min > el) {
    acc.min = el;
  }
  return acc;
}, initialValue);
console.log(result);
