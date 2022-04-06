// function isPrime(target) {
//   for (let i = 2; i < target; i++) {
//     if (target % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

const isPrime = target => {
  for (let i = 2; i < target; i++) {
    if (target % i === 0) {
      return false;
    }
  }
  return true;
};