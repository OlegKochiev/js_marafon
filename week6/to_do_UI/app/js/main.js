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
  }

  addTask(task) {
    this.list.push(task);
    console.log('Hello addTask();', this.list);
  }

  delTask(taskID) {
    let taskIndex = this.list.findIndex(task => task.id === taskID);
    this.list.splice(taskIndex, 1);
    console.log('Hello addTask()', this.list);
  }

  changeTaskStatus(taskID) {
    console.log('Hello addTask();', this.list);
  }
}

const list = new List();

export {
  STATUS,
  PRIORITY,
  list
}