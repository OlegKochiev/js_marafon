// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// console.log(counter1()); // 0
// console.log(counter1()); // 1

// console.log(counter2()); // 0 (независимо)

// // Большую часть теории я записал в Obsidian, собственно не вижу необходимости дублировать информацию. Сюда будут добавлены задачи с их решениями:

// // Задачи

// // №1
// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1

// console.log(counter2()); // 0
// console.log(counter2()); // 1

// // №2

// function Counter() {
//   let count = 0;

//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return --count;
//   };
// }

// let counter = new Counter();

// console.log(counter.up()); // 1
// console.log(counter.up()); // 2
// console.log(counter.down()); // 1

// // №3
// // Сумма с помощью замыканий
// // важность: 4

// // Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// // Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// // Например:

// // sum(1)(2) = 3
// // sum(5)(-1) = 4

// function sum(a) {
//   return function (b) {
//     return a + b;
//   }
// }

// console.log(sum(1)(1)); // 2
// console.log(sum(5)(-1)); // 4

// // №4

// // Фильтрация с помощью функции
// // важность: 5

// // У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// // Сделайте набор «готовых к употреблению» фильтров:

// //     inBetween(a, b) – между a и b (включительно).
// //     inArray([...]) – находится в данном массиве.

// // Они должны использоваться таким образом:

// //     arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// //     arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

// // Например:

// // /* .. ваш код для inBetween и inArray */
// // let arr = [1, 2, 3, 4, 5, 6, 7];

// // alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// // alert( arr.filter(inArray([1, 2, 10])) ); // 1,2



// function inBetween(a, b) {
//   return function (item) {
//     return (item >= a && item <= b);
//   }
// }

// function inArray(array) {
//   return function (item) {
//     return array.includes(item);
//   }
// }


// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// // №5

// // Сортировать по полю
// // важность: 5

// // У нас есть массив объектов, который нужно отсортировать:

// // let users = [
// //   { name: "John", age: 20, surname: "Johnson" },
// //   { name: "Pete", age: 18, surname: "Peterson" },
// //   { name: "Ann", age: 19, surname: "Hathaway" }
// // ];

// // Обычный способ был бы таким:

// // // по имени (Ann, John, Pete)
// // users.sort((a, b) => a.name > b.name ? 1 : -1);

// // // по возрасту (Pete, Ann, John)
// // users.sort((a, b) => a.age > b.age ? 1 : -1);

// // Можем ли мы сделать его короче, скажем, вот таким?

// // users.sort(byField('name'));
// // users.sort(byField('age'));

// // То есть, чтобы вместо функции, мы просто писали byField(fieldName).

// // Напишите функцию byField, которая может быть использована для этого.

// function byField(sortParam) {
//   return (a, b) => a[sortParam] > b[sortParam] ? 1 : -1;

// }


// let users = [{
//     name: "John",
//     age: 20,
//     surname: "Johnson"
//   },
//   {
//     name: "Pete",
//     age: 18,
//     surname: "Peterson"
//   },
//   {
//     name: "Ann",
//     age: 19,
//     surname: "Hathaway"
//   }
// ];

// console.log(users.sort(byField('name')));
// console.log(users.sort(byField('age')));

// №6

// Армия функций
// важность: 5

// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function () { // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.