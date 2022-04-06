// Lab 2.17
const names = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jack', lastName: 'Dann' },
  { firstName: 'Joe', lastName: 'Dunne' }
];

for (let { firstName, lastName } of names) {
  console.log(`${firstName} ${lastName}`);
}