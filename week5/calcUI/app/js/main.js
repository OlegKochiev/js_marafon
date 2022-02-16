const calcBtns = document.getElementsByClassName('calc__btn');
const calcInput = document.getElementById('calcInput');

const mathOperations = ['+', '-', '÷', '×'];
const keypad = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const equal = ['='];
const clear = ['С'];
const backspace = ['backspace'];

for (btn of calcBtns) {
  btn.addEventListener('click', checkBtnType);
}

function checkBtnType(event) {

  const btn = event.target.textContent;

  switch (true) {
    case mathOperations.includes(btn):
      addOperationInInput(btn);
      break;
    case keypad.includes(btn):
      addNumberInInput(btn);
      break;
    case equal.includes(btn):
      calculate();
      break;
    case clear.includes(btn):
      clearInput();
      break;
    case backspace.includes(btn):
      backspaceInput();
      break;
    default:
      console.log('Somethin is wrong!');
      break;
  }

  checkNumbersLength();
}

function addOperationInInput(operation) {
  let calcValue = calcInput.value;
  if (calcValue !== '0') {
    if (mathOperations.includes(calcValue[calcValue.length - 1])) { // Проверям последний введенный символ, если это математический оператор, то заменяем его на тот, который вводим
      calcValue = calcValue.slice(0, -1) + operation; // Заменяем крайний математический оператор на нововведенный
    } else {
      calcValue += operation;
    }
    calcInput.value = calcValue; // доваляем математический оператор в выражение
  }
}

function addNumberInInput(number) {
  let calcValue = calcInput.value;
  if (calcValue === '0' && number !== '0') { // Делаем так, что бы в input при очистке выражения был 0, и убераем его, когда начинаем вводить в него цифры
    calcValue = number;
    calcInput.value = calcValue;
  } else if (calcValue !== '0') {
    calcValue += number;
    calcInput.value = calcValue;
  }
}

function clearInput() {
  calcInput.value = '0';
}

function backspaceInput() {
  let calcValue = calcInput.value;
  if (calcValue.length > 1) { // Если удаляем последнюю цифру, то на ее место ставим 0
    calcInput.value = calcValue.slice(0, -1);
  } else {
    calcInput.value = '0'; // Здесь
  }
}

function checkNumbersLength() {
  switch (true) {
    case (calcInput.value.length > 16):
      calcInput.style.fontSize = '25px';
      break;
    case (calcInput.value.length > 10):
      calcInput.style.fontSize = '35px';
      break;
    case (calcInput.value.length >= 6):
      calcInput.style.fontSize = '55px';
      break;
    case (calcInput.value.length < 6):
      calcInput.style.fontSize = '96px';
      break;
    default:
      console.log('Something is wrong!');
      break;
  }
  if (calcInput.value.length > 6) {}
}

function calculate() {
  let numbersArray = [];
  let operationsArray = [];
  let expression = calcInput.value;

  getNumberOperatorsArray(expression);

  if (numbersArray.length === operationsArray.length) {
    operationsArray.pop();
  }

  let result = 0;
  do {
    for (let i = 0; i < operationsArray.length; i++) {
      switch (operationsArray[i]) {
        case '×':
          numbersArray[i] = +numbersArray[i] * +numbersArray[i + 1];
          numbersArray.splice(i + 1, 1);
          operationsArray.splice(i, 1);
          break;
        case '÷':
          numbersArray[i] = +numbersArray[i] / +numbersArray[i + 1];
          numbersArray.splice(i + 1, 1);
          operationsArray.splice(i, 1);
          break;
      }
    }
    for (let i = 0; i < operationsArray.length; i++) {
      switch (operationsArray[i]) {
        case '+':
          numbersArray[i] = +numbersArray[i] + +numbersArray[i + 1];
          numbersArray.splice(i + 1, 1);
          operationsArray.splice(i, 1);
          break;
        case '-':
          numbersArray[i] = +numbersArray[i] - +numbersArray[i + 1];
          numbersArray.splice(i + 1, 1);
          operationsArray.splice(i, 1);
          break;
      }
    }
  } while (numbersArray.length > 1)

  result = numbersArray[0];
  calcInput.value = result;

  function getNumberOperatorsArray(string) {
    for (let index = 0; index < string.length; index++) {
      if (mathOperations.includes(string[index])) {
        numbersArray.push(string.slice(0, index));
        operationsArray.push(string.slice(index, index + 1));
        getNumberOperatorsArray(string.slice(index + 1, string.length));
        return;
      }
    }
    string !== '' ? numbersArray.push(string) : '';
  }
}