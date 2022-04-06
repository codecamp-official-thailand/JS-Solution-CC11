
// Lab 4.21
// #1
let array = [9, 17, 23, 5];
let result = array.filter(function (el) {
  return el > 10;
});
console.log(result);
// #2
array = [1, 2, 3, 4];
result = array.filter(function (el) {
  return el % 2;
});
console.log(result);
// #3
array = [1, '1', 2, {}];
result = array.filter(function (el) {
  return typeof el === 'number';
});
console.log(result);
// #4
array = ['apple', 'banana', 'orange', 'pineapple', 'watermelon'];
result = array.filter(function (el) {
  return el.length > 6;
});
console.log(result);
// #5
array = [1, -3, 2, 8, -4, 5];
result = array.filter(function (el) {
  return el > 0;
});
console.log(result);
// #6
array = [1, 3, 4, 5, 6, 7, 8];
result = array.filter(function (el) {
  return el % 3 === 0;
});
console.log(result);
// #7
array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
result = array.filter(function (el) {
  return el.startsWith('E');
});
console.log(result);
// #8
array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
result = array.filter(function (el) {
  return el.toUpperCase() === el;
});
console.log(result);

// #9
array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];
result = array.filter(function (el) {
  return el.toLowerCase().includes('buri');
});
console.log(result);

// #10
array = [
  { name: 'Ben', age: 14 },
  { name: 'Phil', age: 18 },
  { name: 'John', age: 32 },
  { name: 'Ann', age: 16 },
  { name: 'Paul', age: 24 }
];

result = array.filter(function (el) {
  return el.age >= 18;
});
console.log(result);
// #11
array = [
  { id: 1, name: 'Pepsi' },
  { id: 2, name: 'Mirinda' },
  { id: 3, name: 'Coke' },
  { id: 4, name: 'Fanta' },
  { id: 5, name: 'Sprite' }
];
result = array.filter(function (el) {
  return el.id !== 4;
});
console.log(result);

// #12
array = [
  { name: 'John', birth: '2001-07-31' },
  { name: 'Jack', birth: '1990-06-24' },
  { name: 'Jim', birth: '1984-12-13' },
  { name: 'Jeff', birth: '1996-02-05' },
  { name: 'Joe', birth: '2002-06-13' }
];
result = array.filter(function (el) {
  return el.birth.slice(5, 7) === '06';
});
console.log(result);
