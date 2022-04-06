
const username = prompt('Enter Username');
const password = prompt('Enter Password');

if (username === '') {
  alert('Username is required');
  if (password === '') {
    alert('Password is required');
  }
} else if (password === '') {
  alert('Password is required');
} else {
  if ((username === 'admin' && password === '1234') || (username === 'john' && password === 'qwerty')) {
    alert(`Hello ${username}`);
  } else {
    alert('invalid username or password');
  }
}
