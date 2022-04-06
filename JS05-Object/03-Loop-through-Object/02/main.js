const isNumber = num => {
  if (num === null || num === '' || (num + '').trim() === '' || typeof num === 'boolean') {
    return false;
  }
  return !isNaN(num);
};

const multiplyNumeric = (obj, num) => {
  let result = {};
  for (let k in obj) {
    result[k] = isNumber(obj[k]) ? num * obj[k] : obj[k];
  }
  return result;
};

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

console.log(multiplyNumeric(menu, 5));