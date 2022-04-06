
// Lab 1.6
function random(min, max) {
  // Math.random() [0, 1) // assume min = 2, max = 5:  => [2, 5)
  // const diff = Math.random() * (max - min); // [0, 3)
  // return min + diff; // [2, 5)
  return min + Math.random() * (max - min);
}
