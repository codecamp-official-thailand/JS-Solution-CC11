// Lab 4.37
let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

function getAverageAge(arr) {
  const totalAge = arr.reduce((acc, el) => acc + el.age, 0);
  const avg = totalAge / arr.length;
  return avg;
}
console.log(getAverageAge(arr));
