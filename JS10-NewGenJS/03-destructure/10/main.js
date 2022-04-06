// Lab 2.10
const topSalaries = salaries => {
  let topSalaryName;
  let maxSalary = 0;
  // [key, value]
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      topSalaryName = name;
      maxSalary = salary;
    }
  }
  // return topSalaryName ?? null;
  return topSalaryName ? topSalaryName : null;
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};
console.log(topSalaries(salaries));