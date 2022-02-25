const STATUS = {
  DONE: "Done",
  TO_DO: "To do"
}

const PRIORITY = {
  HIGH: "high",
  LOW: "low"
}

class List {
  constructor() {
    this.list = [];
    this.freeID = 0;
  }

  addTask(task) {
    this.list.push(task);
  }

  delTask(taskID) {
    let taskIndex = this.list.findIndex(task => task.id === taskID);
    this.list.splice(taskIndex, 1);
  }

  changeTaskStatus(taskID) {
    let taskIndex = this.list.findIndex(task => task.id === taskID);
    if (this.list[taskIndex].status === STATUS.DONE) {
      this.list[taskIndex].status = STATUS.TO_DO;
    } else {
      this.list[taskIndex].status = STATUS.DONE;
    }
  }
}

const list = new List();

export {
  STATUS,
  PRIORITY,
  list
}