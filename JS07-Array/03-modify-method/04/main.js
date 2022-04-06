// Lab 4.4
function first(arr, n) {
  if (n === 1 || n === undefined) {
    return arr[0];
  }
  return arr.slice(0, n);
}


console.log(first([7, 9, 0, -2])); // 7
console.log(first([], 3)); // []
console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]