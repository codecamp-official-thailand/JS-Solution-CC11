// Lab 2.6
function extractCurrencyValue(string, rate) {
  return 'THB' + string.slice(1) * rate;
}
console.log(extractCurrencyValue('$120', 30));