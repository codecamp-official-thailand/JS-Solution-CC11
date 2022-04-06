function isNumber(num) {
    // #1
    // if (num === null || num === '' || num.trim() === '' || isNaN(num)) {
    //   return false;
    // }
    // return true;
    // #2
    // return num === null || num === '' || num.trim() === '' || isNaN(num) ? false : true;
    // #3
    return !(num === null || num === '' || num.trim() === '' || isNaN(num));
  }

const score = prompt('Enter score');

if (!isNumber(score)) {
  alert('Invalid score');
} else {
  if (score >= 80) {
    alert('A');
  } else if (score >= 70) {
    alert('B');
  } else if (score >= 60) {
    alert('C');
  } else if (score >= 50) {
    alert('D');
  } else {
    alert('F');
  }
}
