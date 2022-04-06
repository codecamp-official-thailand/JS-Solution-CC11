
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};



const getTotalSalaries = obj => {
    let sum = 0;
    for (let k in obj) {
      sum += obj[k];
    }
    return sum;
  };
  
  console.log(getTotalSalaries(salaries));
  