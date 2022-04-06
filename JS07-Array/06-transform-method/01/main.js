// Lab 4.23
// #1
let array = [1, 2, 30, 400];
let result = array.map(function (el) {
  return el * 2;
});
console.log(result);

// #2
array = [1, 2, 3, 4];
result = array.map(function (el) {
  return String(el);
});
console.log(result);

// #3
array = [1, '1', 2, {}];
result = array.map(function (el) {
  return typeof el;
});
console.log(result);

// #4
array = ['apple', 'banana', 'orange'];
result = array.map(function (el) {
  return el.toUpperCase();
});
console.log(result);

// #5
array = [1, 3, 4, 5, 6, 7, 8];
result = array.map(function (el) {
  return el % 2 === 0 ? 'even' : 'odd';
});
console.log(result);

// #6
array = [1, -3, 2, 8, -4, 5];
result = array.map(function (el) {
  return Math.abs(el);
});
console.log(result);

// #7
array = [100, 200.25, 300.84, 400.3];
result = array.map(function (el) {
  return el.toFixed(2);
});
console.log(result);

// #8
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

array = [0, 5, 10, 7, 6, 5, 0];
result = array.map(function (el) {
  return MONTH[el];
});
console.log(result);

// #9
array = [1, 16, 81, 256, 625, 1296];
result = array.map(function (el) {
  return Math.sqrt(Math.sqrt(el));
});
console.log(result);

// #10
array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
result = array.map(function (el) {
  return el.name;
});
console.log(result);

// #11
array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
result = array.map(function (el) {
  return el.age;
});
console.log(result);

// #12
array = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
result = array.map(function (el) {
  return `${el.name} ${el.surname}`;
});
console.log(result);

// #13
array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
result = array.map(function (el) {
return {
  name: el.name,
  birth: el.birth,
  age: 2021 - el.birth.slice(0, 4)
};
  return {
    ...el,
    age: 2021 - el.birth.slice(0, 4)
  };
});
console.log(result);

// #14
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function formatDate(date) {
  return date.slice(8, 10) + ' ' + MONTH[+date.slice(5, 7) - 1].toLowerCase() + ' ' + date.slice(0, 4);
}
array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
result = array.map(function (el) {
  return `<tr><td>${el.name}</td><td>${formatDate(el.birth)}</td></tr>`;
});
console.log(result);