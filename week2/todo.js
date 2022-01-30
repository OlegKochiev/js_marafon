// Хранилищем будет объект, а имена задач - ключами.

const STATUS = {
  IN_PROGRESS: "In progress",
  DONE: "Done",
  TO_DO: "To do"
}

const DEFAULT_STATUS = STATUS.TO_DO;

const list = {
  "create a new practice task": STATUS.IN_PROGRESS,
  "make a bed": STATUS.DONE,
  "write a post": STATUS.TO_DO,
}

function changeStatus(task, status) {
  list[task] = status;
}

function addTask(task) {
  list[task] = DEFAULT_STATUS;
}

function deleteTask(task) {
  delete list[task];
}

function showList() {
  let toDo = getTasksGroup(STATUS.TO_DO);
  let inProgress = getTasksGroup(STATUS.IN_PROGRESS);
  let done = getTasksGroup(STATUS.DONE);
  console.log(toDo + inProgress + done);
}

function getTasksGroup(status) {
  let group = status + ":\n";
  for (let task in list) {
    if (list[task] === status) {
      group = group + "  " + task + ";\n";
    }
  }
  return group;
}

console.log(showList());