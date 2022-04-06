// Lab 1.8
const removeRandom = array => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return [...array].splice(randomIndex, 1);
};