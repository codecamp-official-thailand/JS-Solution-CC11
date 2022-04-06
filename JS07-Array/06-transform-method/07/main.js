// Lab 4.29
const nums = [-3, 2, 11, -7, 4, 6];
let result = 1;
for (let i = 0; i < nums.length; i++) {
  result = result * nums[i];
}
console.log(result);

const result1 = nums.reduce((acc, el) => acc * el, 1);
console.log(result1);
