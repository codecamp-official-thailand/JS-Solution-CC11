
//5! = 5 x 4 x 3 x 2 x 1 = 120
const factorial = num => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(5));
