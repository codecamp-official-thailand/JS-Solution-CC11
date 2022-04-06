const result = {};
let key, value;

do {
  key = prompt('Enter fruit');
  value = prompt('Enter amount');
  if (key !== 'stop' && value !== 'stop') {
    if (value > 1) {
      result[key + 's'] = value;
    } else {
      result[key] = value;
    }
  }
} while (key !== 'stop' && value !== 'stop');
console.log(result);