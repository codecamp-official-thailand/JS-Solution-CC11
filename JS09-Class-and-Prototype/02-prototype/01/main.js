// Lab 6.1
Array.prototype.max = function () {
    return Math.max(...this);
  };
  
  Array.prototype.sum = function () {
    return this.reduce((acc, el) => acc + el, 0);
  };
  
  const arr = [1, 4, 7, 2, 10, 5, 11, 1];
  console.log(arr.max()); // 7
  console.log(arr.sum());
  