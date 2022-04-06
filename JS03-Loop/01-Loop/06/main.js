let str = ''; // * * * *
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    // if (j <= i) {
    str += '* ';
    // }
  }
  str = str.trim() + '\n';
}
// Iteration 1: i = 1, j = 1, str = '* '
// Iteration 2: i = 1, j = 2, str = '* * ' มันควรจะเป็น '* '
// Iteration 3: i = 1, j = 3, str = '* * * ' มันควรจะเป็น '* '
// Iteration 4: i = 1, j = 4, str = '* * * * ' มันควรจะเป็น '* '
// Iteration 5: i = 2, j = 1, str = '* * * *\n* '
// ...
// Iteration 16: str => '* * * *\n* * * * \n* * * * \n* * * * *\n'

// const str1 = 'a\nb';
// console.log(str1);
console.log(str);