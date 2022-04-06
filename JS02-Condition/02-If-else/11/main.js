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
!isNumber(score)
  ? alert('Invalid Score')
  : score >= 80
  ? alert('A')
  : score >= 70
  ? alert('B')
  : score >= 60
  ? alert('C')
  : score >= 50
  ? alert('D')
  : alert('F');