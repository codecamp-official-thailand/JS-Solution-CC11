// Lab 4.22
function filterRange(arr, a, b) {
  return arr.filter(function (el) {
    return el >= a && el <= b;
  });
}

// const array = [5, 3, 8, 1];
// console.log(filterRange(array, 1, 4)); // [3,1]
const array = [7, 12, 9, 21, 15, 0, 4];
console.log(filterRange(array, 5, 10)); // [3,1]
