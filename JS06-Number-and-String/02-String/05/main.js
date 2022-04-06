// Lab 2.5
function truncate(str, length) {
  if (str.length > length) {
    return str.slice(0, length - 1) + '...';
  }
  return str;
}
console.log(truncate("What I'd like to tell on this topic is:", 20));