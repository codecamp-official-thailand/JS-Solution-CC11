

// Lab 4.30
const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 }
];
let result = 0;
for (let i = 0; i < scores.length; i++) {
  result = result + scores[i].score * scores[i].weight;
}
console.log(result);

const result1 = scores.reduce((acc, el) => acc + el.score * el.weight, 0);
console.log(result1);
