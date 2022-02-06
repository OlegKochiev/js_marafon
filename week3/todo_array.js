const STATUS = {
  IN_PROGRESS: "In progress",
  DONE: "Done",
  TO_DO: "To do"
}
const PRIORITY = {
  HIGH: "high",
  LOW: "low"
}

const DEFAULT_STATUS = STATUS.TO_DO;
const DEEFAULT_PRIORITY = PRIORITY.LOW;

const list = [{
    'name': "create a new practice task",
    'status': STATUS.IN_PROGRESS,
    'priority': PRIORITY.LOW
  },
  {
    'name': 'test',
    'status': STATUS.DONE,
    'priority': PRIORITY.HIGH
  },
  {
    'name': "create asssa",
    'status': STATUS.TO_DO,
    'priority': PRIORITY.LOW
  }
]

function changeStatus(task, status) {
  list.forEach(function (item) {
    item.name === task ? item.status = status : '';
    break;
  })
}

function addTask(task) {
  list.push({
    'name': task,
    'status': DEFAULT_STATUS,
    'priority': DEEFAULT_PRIORITY
  });
}

function deleteTask(task) {
  let taskIndex = list.findIndex((item) => item.name === task);
  if (+taskIndex !== -1) {
    list.splice(taskIndex, 1);
  } else {
    console.log("Указанная задача не найдена!");
  }
}

function showList() {
  let toDo = getTasksGroup(STATUS.TO_DO);
  let inProgress = getTasksGroup(STATUS.IN_PROGRESS);
  let done = getTasksGroup(STATUS.DONE);
  console.log(toDo + inProgress + done);
}

function showBy(groupValue) {
  switch (groupValue) {
    case "status":
      showGroupedArray(STATUS, groupValue);
      break;
    case "priority":
      showGroupedArray(PRIORITY, groupValue);
      break;
    default:
      console.log("Вы ввели неверный параметр!");
      break;
  }
}

function showGroupedArray(groupArray, groupValue) {
  for (let value in groupArray) {
    console.log(groupArray[value] + ':');
    let resultArray = list.filter((item) => item[groupValue] === groupArray[value]);
    console.log(resultArray);
  }
}

function getTasksGroup(status) {
  return group = status + ":\n" + list.reduce((total, item) => total += item.status === status ? ' ' + item.name + '\n' : '', '')
}

// deleteTask('test1')
// deleteTask('say hello')
// addTask('say hello');
// changeStatus('test', DEFAULT_STATUS);

// showBy('priority')
// showBy('status')
// let str = 'priority'
// console.log(GROUP_VALUES[str.toUpperCase()].HIGH);

// showList();