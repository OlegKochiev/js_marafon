const inputHigh = document.getElementById('highPriorityInput');
const btnHigh = document.getElementById('highPriorityBtn');
const inputLow = document.getElementById('lowPriorityInput');
const btnLow = document.getElementById('lowPriorityBtn');

inputHigh.addEventListener('keyup', saveTask);
btnHigh.addEventListener('enter', saveTask);

function saveTask(event) {
  console.log(event);
}

export {
  inputHigh,
  btnHigh,
  inputLow,
  btnLow
}