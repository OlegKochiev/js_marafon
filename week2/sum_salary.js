function sumSalary(obj) {
  let salaryCount = 0;
  for (let key in obj) {
    if (typeof (obj[key]) === "number")
      salaryCount += obj[key];
  }
  return salaryCount;
}

let salaries = {
  John: 100,
  Genry: 200,
  Elisa: 150
}

console.log(sumSalary(salaries));