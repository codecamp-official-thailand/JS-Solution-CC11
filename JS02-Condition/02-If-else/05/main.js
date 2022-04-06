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
  
  const input = prompt('Enter number');
  
  if (isNumber(input)) {
    if (+input % 2 === 0) {
      alert('Even');
    } else {
      alert('Odd');
    }
  } else {
    alert('Invalid Number');
  }
  