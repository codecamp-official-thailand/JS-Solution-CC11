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
  
  
 
  const input1 = prompt('Enter number 1');
  const input2 = prompt('Enter number 2');
  
  // a && b = !a || !b
  if (isNumber(input1) && isNumber(input2)) {
    alert(+input1 + +input2);
  } else {
    alert('Invalid number');
  }
  
  if (!isNumber(input1) || !isNumber(input2)) {
    alert('Invalid number');
  } else {
    alert(+input1 + +input2);
  }