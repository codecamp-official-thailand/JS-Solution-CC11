
// Lab 1.3
const mergeObjects = (...objects) => Object.assign({}, ...objects.reverse());
console.log(mergeObjects({ name: 'M' }, { age: 12, name: 'Ton' }, { name: 'Pipe', age: 15 }));