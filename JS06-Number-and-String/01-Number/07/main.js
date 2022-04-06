

// Lab 1.7
function randomDice() {
  // ปัดขึ้น โอกาสไม่เท่ากัน 6 * Math.random() => [0, 6) 0-1, 1.0000001-2, 2.0000001-3, ... 5.000001-5.999999
  // ต้องปัดลง 6 * Math.random() => 0-0.99999999, 1-1.9999999, ... 5-5.99999999999
  return 1 + Math.floor(6 * Math.random());
}

console.log(randomDice());
console.log(randomDice());
console.log(randomDice());
console.log(randomDice());