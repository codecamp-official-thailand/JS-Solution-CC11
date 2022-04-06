const user = prompt('Enter username');

// #1
function sayHelloUser() {
  alert(`Hello ${user}`);
}
sayHelloUser();

// #2
function sayHelloUser(username) {
  alert(`Hello ${username}`);
}
sayHelloUser(user);
