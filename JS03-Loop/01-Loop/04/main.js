
let sum = 0;
let sumOdd = 0;
let sumEven = 0;
let result = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
  if (i % 2) {
    sumOdd += i;
  } else {
    sumEven += i;
    result += i ** 2;
  }

  if (i % 3 === 0) {
    result -= i ** 2;
  }
}

console.log(sum);
console.log(sumOdd);
console.log(sumEven);
console.log(result);
