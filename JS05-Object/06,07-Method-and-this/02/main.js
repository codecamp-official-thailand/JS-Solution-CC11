
let name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
console.log(window);
let user = makeUser(); // window.makeUser()
console.log(user.ref.name); // *

const obj = {
  name: 'Jack',
  makeUser: function () {
    return {
      name: 'John',
      ref: this
    };
  }
};

console.log(obj.makeUser()); // { name: 'John', ref: { name: 'Jack', makeUser: function() { return { name: 'John', ref: this } } } }
console.log(obj.makeUser().ref.makeUser);
console.log(obj.makeUser().name);