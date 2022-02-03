let billion = 1000000000;
let billion2 = 1e9; // 1000000000

let num1 = 1.3e5, // 1300000
  num2 = 2.2e-5, // 0.000022
  num3 = 1e-5; // 0.00001

let num4 = 0xff, // 255
  num5 = 0xFF; // 255

// let num6 = 0b8; - не работает двоичный формат записи числа


// .toString(base) - переводит к base системе счисления. base = [2; 36]
let num7 = 255;
console.log(num7.toString(16)); // ff
console.log(num7.toString(2)); // 11111111
console.log(4..toString(2)); // 100
console.log(4.2.toString(2)); // 100.00110011001100110011001100110011001100110011001101


// Math.floor() - округляет в меньшую сторону
console.log(Math.floor(3.1)); // 3
console.log(Math.floor(-1.1)); // -2

// Math.ceil() - округляет в большую сторону
console.log(Math.ceil(3.1)); // 4
console.log(Math.ceil(-1.1)); // -1

// Math.round() - округляет до ближайшего целого числа
console.log(Math.round(3.1)); // 3
console.log(Math.round(3.6)); // 4

// Math.trunc() - удаляет дробную часть, без изменения целой
console.log(Math.trunc(3.3)); // 3
console.log(Math.trunc(-1.1)); // -1

// .toFixed(n) - округляет число до n знаков
console.log(100.23.toFixed(1)); // этот метод возвращает строку. Чтобы обратно преобразовать в число, достаточно указать унарный оператор "+"": +num.toFixed(n)
// Неточные вычисления. Если сложить 2 дробных счисла: 0.1 + 0.2, то оно не будет равно 0.3
console.log((0.1 + 0.2) === 0.3); // 0.30000000000000004 === 0.3 => false
// чтобы избежать неточности достаточно использовать метод .toFixed():  
console.log(+(0.1 + 0.2).toFixed(2) === 0.3);

// isNaN() - преобразует значение в число и проверяет является ли оно NaN
console.log(isNaN(NaN)); // true
console.log(isNaN("abc")); // true

// isFinite() - преобразует значение в число и возвращает true если оно является обыным числом, т.е. на NaN/Infinity/-Infinity
console.log(isFinite("145")); // true
console.log(isFinite("abc")); // false, т.к. получается спец. значение NaN
console.log(isFinite(Infinity)); // false, т.к. получается спец. значение Infinity
// Object.is(a, b) - сравнивает числа a и b, если только они не равны 0 и -0.
console.log(Object.is(NaN, NaN)); // true

// parseInt(n, base), parseFloat() - ф-ции которые пытаются из строки получить число. parseInt() так же может читать строки с шестнадцатеричными числами, если ему передать параметр base.
console.log(parseInt("100px")); // 100
console.log(parseFloat('12.3em')); // 12.3
console.log(parseInt('a123')); // NaN, т.к. буква стоит первая в строке.

// Math.random() - возвращает псевдослучайное число в диапазоне от [0;1) (0 включительно).
console.log(Math.random());
//Math.max(a, b, c, ...) - возвращает наибольшее число из перечисленных аргументов
console.log(Math.max(1, 2, 3, 4, 10, -15)); // 10
//Math.min(a, b, c, ...) - возвращает наименьшее число из перечисленных аргументов
console.log(Math.min(1, 2, 3, 4, 10, -15)); // -15
// Math.pow(n, power) - возвращает число n, в возведенную степень power.
console.log(Math.pow(2, 10)); // 1024




// Задачи




function readNumber() {
  while (true) {
    let number = prompt("Введите число!");
    if (parseInt(number) || parseFloat(number)) {
      alert("Молодец, Вы ввели число!");
      break;
    }
  }
}

// Получаем псевдослучайное число в диапазоне от [min; max):
function random(min, max) {
  return min + Math.random() * (max - min);
}

// Получаем целое псевдослучайное число в диапазоне [min; max):
function randomInteger(min, max) {
  return min + Math.trunc(Math.random() * (max - min));
}