// // Таймер с аргументами

// function sayHi(phrase, who) {
//   console.log(`${phrase}, ${who}!`);
// }
// // setTimeout(sayHi, 1000, "goodbye", "Vasia");




// // Таймер с аргументами и с использованием замыкания

// function sayHi(phrase) {
//   return function (who) {
//     console.log(`${phrase}, ${who}!`);
//   }
// }
// // setTimeout(sayHi("hi"), 1000, "Genry");

// let timerId = setTimeout(() => console.log("ничего не происходит"), 1000);
// // console.log(timerId); // идентификатор таймера

// clearTimeout(timerId);
// // console.log(timerId); // тот же идентификатор (не принимает значение null после отмены)




// // Интервальный таймер с аргументами

// // повторить с интервалом 2 секунды
// let timerId2 = setInterval(() => console.log('tick'), 2000);

// // остановить вывод через 5 секунд
// setTimeout(() => {
//   clearInterval(timerId2);
//   console.log('stop');
// }, 5000);


// // Рекурсивный таймер:
// let counter = 0;
// let timerId3 = setTimeout(function tick() {
//   console.log('tickC');
//   ++counter;
//   if (counter < 3) {
//     timerId3 = setTimeout(tick, 2000); // (*)
//   }
// }, 2000);


// Задачи

// №1

// Вывод каждую секунду
// важность: 5

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

//     Используя setInterval.
//     Используя рекурсивный setTimeout.

// вариант - А
function printNumbers(a, b) {
  let counter1 = a;
  let intervalId = setInterval(() => {
    if (counter1 <= b) {
      console.log(counter1++);
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}
// printNumbers(1, 5);

// вариант - Б


function printNumbers(a, b) {
  let count3 = a;

  setTimeout(function go() {
    if (count3 <= b) {
      console.log(count3++);
      setTimeout(go, 1000);
    }
  }, 1000)
}

function showCount() {
  if (count3 <= b) {
    console.log(count3++);
    setTimeout(showCount, 1000);
  } else {
    clearInterval(timerId0);
  }

  let timerId0 = setTimeout(showCount, 1000)
}
printNumbers(1, 5);


//№2