function max(a, b, c, d) {
  if (a === undefined) {
    return;
  }
  if (b === undefined) {
    return Math.max(a);
  }
  if (c === undefined) {
    return Math.max(a, b);
  }
  if (d === undefined) {
    return Math.max(a, b, c);
  }
  return Math.max(a, b, c, d);
}

console.log(max()); // undefined
console.log(max(2)); // 2
console.log(max(3, 1)); // 3
console.log(max(7, 3, 'aaaaa', 2)); // 9
