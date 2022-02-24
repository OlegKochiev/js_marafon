const inputHigh = document.getElementById('inputHigh');
const inputLow = document.getElementById('inputLow');
inputHigh.addEventListener('keydown', listenerForInput);
inputLow.addEventListener('keydown', listenerForInput);

console.log('hi');

function addTask(event, STATUS, PRIORITY) {
    const task = getNewTask(event, STATUS, PRIORITY);
    const taskNode = getNewNode(task);
    const toDoList = getToDOList(task, PRIORITY);

    toDoList.prepend(taskNode);
}

function getNewTask(event, STATUS, PRIORITY) {
    const parent = event.target.parentNode;
    const name = parent.querySelector('input').value;
    parent.querySelector('input').value = '';
    const status = STATUS.TO_DO;
    const priority = parent.id === 'highPriority' ? PRIORITY.HIGH : PRIORITY.LOW;
    return {
        name,
        status,
        priority
    };
}

function getNewNode(task) {
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let p = document.createElement('p');
    let btnDel = document.createElement('button');

    li.classList.add('to-do__item');

    checkbox.type = 'checkbox';
    checkbox.classList.add('to-do__task-checkbox');
    checkbox.addEventListener('click', changeTaskStatus, task);

    p.textContent = task.name;
    p.classList.add('to-do__task-desc');

    btnDel.type = 'button'
    btnDel.classList.add('to-do__del-btn');
    btnDel.addEventListener('click', delTask);

    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(btnDel);

    return li;
}

function getToDOList(task, PRIORITY) {
    let toDoList;
    if (task.priority === PRIORITY.HIGH) {
        toDoList = document.getElementById('highPriorityList');
    } else {
        toDoList = document.getElementById('lowPriorityList');
    }
    return toDoList;
}

function delTask(event) {
    let toDoNode = event.target.parentNode;
    toDoNode.remove();
}

function listenerForInput(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask(event);
    }
}

function changeTaskStatus(task) {

}

export {
    addTask,
    getNewTask,
    getNewNode,
    getToDOList,
    delTask,
    listenerForInput,
    changeTaskStatus
}