// Это простое упражнение для понимания функции языка javascript, называемой закрытием.
// Функция buildFun вернет массив функций. Единственным параметром, принимаемым buildFun, является количество элементов N возвращаемого массива.
// Желаемый результат состоит в том, что при выполнении всех функций в массиве должно быть возвращено число от 0 до N.

function buildFun(n) {
  var res = [];
  for (var i = 0; i < n; i++) {
    res.push(function () {
      console.log(i);
    })
  }
  return res;
}


// Решение:

function buildFun2(n) {
  function getFunction(i) {
    return function () {
      return i;
    }
  }
  var res2 = [];
  for (var i = 0; i < n; i++) {
    res2.push(getFunction(i));
  }
  return res2;
}
// Если усовершенствовать решение  то можно получить: 

function buildFun3(n) {
  var res = [];
  for (var i = 0; i < n; i++) {
    res.push((i => () => i)(i));
  }
  return res;
}
// console.log(buildFun3(10)[5]());


// Это конец учебного года, судьбоносный момент вашего школьного отчета. Необходимо рассчитать средние значения. Все студенты приходят к вам и умоляют вас рассчитать их среднее значение для них. Легко! Вам просто нужно написать сценарий.
// Возвращает среднее значение данного массива, округленное до ближайшего целого числа.
// Массив никогда не будет пустым.

function getAverage(marksArray) {
  let summary = marksArray.reduce((sum, mark) => sum += mark, 0);
  return Math.floor(summary / marksArray.length);
}

console.log(getAverage([1, 5, 87, 45, 8, 8]));