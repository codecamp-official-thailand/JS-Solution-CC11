const result = {};
let key, value;

do {
  key = prompt('Enter key');
  value = prompt('Enter value');
  if (key !== 'stop' && value !== 'stop') {
    result[key] = value;
  }
} while (key !== 'stop' && value !== 'stop');
console.log(result);