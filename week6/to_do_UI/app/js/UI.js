import { STATUS, PRIORITY, list } from './main.js';

const inputHigh = document.getElementById('inputHigh');
const inputLow = document.getElementById('inputLow');
const btnHigh = document.getElementById('btnHigh');
const btnLow = document.getElementById('btnLow');

inputHigh.addEventListener('keydown', listenerForInput);
inputLow.addEventListener('keydown', listenerForInput);

btnHigh.addEventListener('click', addTask);
btnLow.addEventListener('click', addTask);

function addTask(event) {
    const task = getNewTask(event);
    const taskNode = getNewNode(task);
    const toDoList = getToDOList(task);

    toDoList.prepend(taskNode);
}

function getNewTask(event) {
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

function getToDOList(task) {
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