// Lab 2.15
const q = { prop: 5, prop2: [10, 100] };
const {
  prop: a,
  prop2: [, b]
} = q;
console.log(a, b);