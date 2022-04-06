// Lab 1.4
function formatNumberToTwoDigit(number) {
  return (Math.floor((number * 100).toFixed(2)) / 100).toFixed(2);
}


console.log(formatNumberToTwoDigit(10));
console.log(formatNumberToTwoDigit(5.1));
console.log(formatNumberToTwoDigit(3.1289));