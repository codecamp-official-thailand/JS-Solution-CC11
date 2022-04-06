// Lab 1.7
const doubleAndReturnArgs = (array, ...numbers) => [...array, ...numbers.map(el => el * 2)];
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([1], 3, 9, 6, 1));
