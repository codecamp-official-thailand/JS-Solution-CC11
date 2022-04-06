
const answer = prompt('Enter correct number');

if (+answer <= 0 || +answer > 100) {
  alert('Correct number must be between 1 and 100');
} else {
  let guess;
  let count = 0;
  do {
    guess = prompt('Enter guess number');
    count++;
    if (guess < answer) {
      alert('Less than answer');
    } else if (guess > answer) {
      alert('Greater than answer');
    } else {
      alert('Correct');
      alert(count);
    }
  } while (guess !== answer);
}