

// #1

//let user = prompt('Enter username');
// if (user === null || user === '') {
//   user = 'Guest';
// }

// if (user === 'codecamp') {
//   const password = prompt('Enter password');
//   if (password === '123456') {
//     user = 'codecamp';
//   } else {
//     alert('Wrong password');
//   }
// } else {
//   user = 'Guest';
// }

// #2

//let user = prompt('Enter username');
//let user = prompt('Enter username');
// if (user !== 'codecamp') {
//   user = 'Guest';
// } else {
//   const password = prompt('Enter password');
//   if (password === '123456') {
//     // user = 'codecamp';
//   } else {
//     alert('Wrong password');
//   }
// }

//#3
let user = prompt('Enter username') || 'Guest';
if (user !== 'codecamp') {
  user = 'Guest';
  alert(`Welcome ${user}`);
} else {
  const password = prompt('Enter password');
  if (password !== '123456') {
    alert('Wrong password');
  } else {
    alert(`Welcome ${user}`);
  }
}
