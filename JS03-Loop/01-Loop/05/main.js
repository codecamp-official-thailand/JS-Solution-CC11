
// Idea 
let balance = 100000;
// interest * balance / 100
// newBalance = balance + interest * balance / 100

// Lab 10.5
for (let i = 1; i <= 10; i++) {
  // #1
  balance = balance + ( 2.5 * balance / 100)
  // #2
  // balance += (2.5 * balance) / 100;
}

console.log(balance.toFixed(2));
