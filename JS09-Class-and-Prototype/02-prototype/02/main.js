// Lab 6.2
Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    console.log('Hello!');
  }
  f.defer(5000); // shows "Hello!" after 1 second