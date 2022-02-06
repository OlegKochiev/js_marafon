const GROUP_VALUES = {
  'STATUS': {
    IN_PROGRESS: "In progress",
    DONE: "Done",
    TO_DO: "To do"
  },
  'PRIORITY': {
    HIGH: "high",
    LOW: "low"
  }
}

const DEFAULT_STATUS = GROUP_VALUES.STATUS.TO_DO;
const DEEFAULT_PRIORITY = GROUP_VALUES.PRIORITY.LOW;

const list = [{
    'name': "create a new practice task",
    'status': GROUP_VALUES.STATUS.IN_PROGRESS,
    'priority': GROUP_VALUES.PRIORITY.LOW
  },
  {
    'name': 'test',
    'status': GROUP_VALUES.STATUS.DONE,
    'priority': GROUP_VALUES.PRIORITY.HIGH
  },
  {
    'name': "create asssa",
    'status': GROUP_VALUES.STATUS.TO_DO,
    'priority': GROUP_VALUES.PRIORITY.LOW
  }
]

function changeStatus(task, status) {
  list.forEach(function (item) {
    item.name === task ? item.status = status : '';
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
  let toDo = getTasksGroup(GROUP_VALUES.STATUS.TO_DO);
  let inProgress = getTasksGroup(GROUP_VALUES.STATUS.IN_PROGRESS);
  let done = getTasksGroup(GROUP_VALUES.STATUS.DONE);
  console.log(toDo + inProgress + done);
}

function showBy(groupValue) {
  for (let priorityValue in GROUP_VALUES[groupValue.toUpperCase()]) {
    console.log(GROUP_VALUES[groupValue.toUpperCase()][priorityValue] + ':');
    let resultArray = list.filter((item) => item[groupValue] === GROUP_VALUES[groupValue.toUpperCase()][priorityValue]);
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