// Lab 4.38
const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' }
];
let result = {};
for (let i = 0; i < persons.length; i++) {
  if (result[persons[i].sex]) {
    result[persons[i].sex] = [...result[persons[i].sex], persons[i].name];
  } else {
    result[persons[i].sex] = [persons[i].name];
  }
}
console.log(result);

const result1 = persons.reduce((acc, el) => {
  // if (acc[el.sex]) {
  //   acc[el.sex] = [...acc[el.sex], el.name];
  // } else {
  //   acc[el.sex] = [el.name];
  // }
  // return acc;
  return { ...acc, [el.sex]: acc[el.sex] ? [...acc[el.sex], el.name] : [el.name] };
}, {});
console.log(result1);
