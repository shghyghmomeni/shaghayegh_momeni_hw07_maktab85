"use strict";
let salaries = {
  john: 100,
  pete: 300,
  mary: 250,
  julu: 300,
};

function topSalary(salaries) {
  let max_salary = Math.max(...Object.values(salaries));
  console.log("max Salary is :", max_salary); //300
  console.log("person or people with Max Salary :");
  for (let [name, Salary] of Object.entries(salaries).filter(
    (item) => item[1] == max_salary
  )) {
    console.log(`${name}`);
  }
}
topSalary(salaries);
