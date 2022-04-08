// Остаточные параметры 
function sumAll(...args) { // args — имя массива
  let sum = 0;

  for (let arg of args) {
    sum += arg;
  }

  return sum;
}

alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6


// Оператор расширения
let arr = [3, 5, 1];

alert(Math.max(...arr)); // 5 (оператор "раскрывает" массив в список аргументов)