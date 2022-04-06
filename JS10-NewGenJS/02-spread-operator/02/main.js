// Lab 1.5
const squareIndexThree = array => {
  const clone = [...array];
  if (clone[3]) {
    clone[3] = clone[3] ** 2;
  }
  return clone;
};
console.log(squareIndexThree([]));
console.log(squareIndexThree([1, 3, 5, 2, 9]));