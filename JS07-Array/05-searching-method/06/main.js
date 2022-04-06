
// Lab 4.18
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];
const result = tasks.findIndex(function (el) {
  return el.id === 2;
});
console.log(result);
