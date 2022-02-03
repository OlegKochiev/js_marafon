let array = new Array();
let array2 = [];

let array3 = ["apple", "lemon", "pineapple"];
console.log(array3.length); // свойство length дает количество элементов в массиве
let array4 = ['Яблоко', {
  name: 'Джон'
}, true, function () {
  alert('привет');
}];

let fruits = [
  "Яблоко",
  "Апельсин",
  "Слива",
];

// pop/push, shift/unshift - команды позволяющие удалять/добавлять элемент в конец массива и в начало соответственно
console.log(fruits.pop()); // Груша, т.е. крайний массив удаляется из массива и выводится
console.log(fruits.push("Груша")); // добавляем в конец массива новый элемент "Груша"
console.log(fruits.shift()); // Яблоко, т.е. удаляет первый элемент массива и выводится
console.log(fruits.unshift("Яблоко")); // добавляем в начало массива новый элемент "Яблоко"

// При копировании, массивы ведут себя так же как и объекты, т. е. копируется не содержимое массива, а ссылка на него.
// Команды pop/push выполняются гораздо быстрее чем команды shift/unshift.
// Перебрать массив можно циклами for, for..of, while. Использовать цикл for..in не рекомендуется.



// Задания



let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Рэгги");

function sumInput() {
  let array5 = [];
  let value;
  while (true) {
    value = prompt("Введите значение элемента массива");
    if (value === "" || value === null || !isFinite(value)) break;
    array5.push(+value);
  }
  let sum = 0;
  for (let number of array5) {
    sum += number;
  }
  return sum;
}