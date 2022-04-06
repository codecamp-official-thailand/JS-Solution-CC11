
// Lab 6.5
const unique = function (arr) {
  return Array.from(new Set(arr));
};

const values = [1, 4, 8, 2, 1, 3, 3, 8];
console.log(unique(values)); // [1, 4, 8, 2, 3]


