// .splice(index, deleteCount) - метод массивов позволяющий удалить элементы начиная с index, deleteCount указывает на то, сколько элементов удалить.
let arr = ["Я", "изучаю", "JavaScript"];
console.log(arr.splice(1, 1)); // ["Я", "JavaScript"]
// удалить 3 первых элемента и заменить их другими
let arr2 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
console.log(arr.splice(0, 3, "Давай", "танцевать")); // ["Давай", "танцевать", "прямо", "сейчас"]
// так же метод .splice() возвращает элементы которые удалены из массива.

// .slice(start, end) -  возвращает новый массив, который состоит из элементов нах между [start; end);
let arr3 = ["t", "e", "s", "t"];
console.log(arr.slice(1, 3)); // ["e", "s"]

// arr.concat(arg1, arg2...) - создает новый массив, который состоит из исходного массива arr и переданных этому методу аргументов arg1, arg2 и т.д.
let arr4 = [1, 2];
console.log(arr4.concat([3, 4])); // [1, 2, 3, 4]

// arr.forEach(function(item, index, array) {}) - метод позволяющий запустить функцию для каждого элемента
["Bilbo", "Gandalf", "Nazgul"].forEach(item => console.log(item)); // Bilbo Gendalf Nazgul


// arr.split(delim) - разбиввает строку на массив, по заданному разделителю.
// arr.join(glue) - собирает в строку массив встявляя между элементами разделитель.
// arr.indexof(item, from), arr.lastIndexOff(item, from), arr.includes(item, from) - методы позволяющие веси поиск по массиву
// arr.find(function(item, index, array) {}) - позволяет искать объект в массиве объектов. Если возвращется true, цикл прерывается и возвращается найденный элемент. В противном случае возвращается undefined
// arr.findIndex(function(item, index, array) {}) - делает тоже что и .find() только возвращает не объект, а индекс найденного объекта. Если элемент не найден, возвращает -1.
// arr.filter(function(item, index, array) {}) - возвращает массив из всех найденных элементов.
// arr.map(function(item, index, array) {}) - возвращает новый массив, который состоит из элементов измененных в теле функции.
// arr.reverse() - меняет порядок элементов arr на обратный.
// arr.reduce(function(previousValue, item, index, array) {}) - функция обрабатывает каждый элемент массива, при этом сохраняя промежуточный результат.
// Array.isArray(value) - возвращает true, если value является массивом. в противном слчае возвращается false. При этом typeOf не работает, т.к. не может отличить массив от объекта
// arr.find(func, thisArg) - значение параметра thisArg становится this для func.


// Задачи


function camelize(str) {
  return str
    .split("-")
    .map(
      (word, index) => index === 0 ? word : (word[0].toUpperCase() + word.slice(1)))
    .join("");
}
console.log(camelize("hello-world-bugaga"));


function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && b >= item))
}
console.log(filterRange([5, 3, 8, 1], 1, 4));
let arrr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  return arr.find(function (item, index) {
    (item >= a && item <= b) ? "" : thisArg.slice(index, 1);
  }, thisArg);
}
filterRange(arrr, 1, 4)
console.log(arrr);