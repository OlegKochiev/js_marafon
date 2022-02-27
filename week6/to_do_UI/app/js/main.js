const STATUS = {
  DONE: "Done",
  TO_DO: "To do"
}

const PRIORITY = {
  HIGH: "high",
  LOW: "low"
}

const DEFAULT_STATUS = STATUS.TO_DO;

class List {
  constructor() {
    this.list = [];
    this.idCounter = 0;
  }

  addTask(task) {
    this.list.push(task);
  }

  delTask(taskID) {
    const taskIndex = this.list.findIndex(task => task.id === taskID);
    this.list.splice(taskIndex, 1);
  }

  changeTaskStatus(taskID) {
    const task = this.list.find(task => task.id === taskID);
    if (task.status === STATUS.DONE) {
      task.status = STATUS.TO_DO;
    } else {
      task.status = STATUS.DONE;
    }
  }
}

const list = new List();

export {
  STATUS,
  PRIORITY,
  DEFAULT_STATUS,
  list
}