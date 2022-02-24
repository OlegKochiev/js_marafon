import {
  addTask,
  delTask,
  listenerForInput,
  changeTaskStatus
} from './UI.js'
console.log('hi');

const STATUS = {
  DONE: "Done",
  TO_DO: "To do"
}
const PRIORITY = {
  HIGH: "high",
  LOW: "low"
}

const list = [{
    name: "Genry",
    priority: "LOW",
    status: "Done"
  },
  {
    name: "Harry",
    priority: "LOW",
    status: "Done"
  },
  {
    name: "Ronald",
    priority: "HIGH",
    status: "To do"
  }
]


const btnHigh = document.getElementById('btnHigh');
const btnLow = document.getElementById('btnLow');


btnHigh.addEventListener('click', (event) => addTask(event, STATUS, PRIORITY));
btnLow.addEventListener('click', (event) => addTask(event, STATUS, PRIORITY));