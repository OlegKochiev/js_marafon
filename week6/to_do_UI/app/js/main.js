import {
  addTask,
  delTask,
  listenerForInput,
  changeTaskStatus
} from './UI.js'

const STATUS = {
  DONE: "Done",
  TO_DO: "To do"
}
const PRIORITY = {
  HIGH: "high",
  LOW: "low"
}

const list = []

const inputHigh = document.getElementById('inputHigh');
const inputLow = document.getElementById('inputLow');
inputHigh.addEventListener('keydown', (event) => listenerForInput(event, STATUS, PRIORITY));
inputLow.addEventListener('keydown', (event) => listenerForInput(event, STATUS, PRIORITY));


const btnHigh = document.getElementById('btnHigh');
const btnLow = document.getElementById('btnLow');


btnHigh.addEventListener('click', (event) => addTask(event, STATUS, PRIORITY));
btnLow.addEventListener('click', (event) => addTask(event, STATUS, PRIORITY));