
// Lab 4.24
function firstUc(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function convertToCamel(dashSeparated) {
  return dashSeparated
    .split('-')
    .map(function (el, index) {
      return index ? firstUc(el) : el;
    })
    .join('');
}

console.log(convertToCamel('dash-separated'));
console.log(convertToCamel('border-top-right-radius'));
