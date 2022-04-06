// Lab 4.28
function copySorted(array) {
  return array.slice(0).sort();
}

let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
