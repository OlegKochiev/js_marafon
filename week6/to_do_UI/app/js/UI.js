import {
	STATUS,
	PRIORITY,
	list
} from './main.js';

const inputHigh = document.getElementById('inputHigh');
const inputLow = document.getElementById('inputLow');
inputHigh.addEventListener('keydown', (event) => listenerForInput(event));
inputLow.addEventListener('keydown', (event) => listenerForInput(event));


const btnHigh = document.getElementById('btnHigh');
const btnLow = document.getElementById('btnLow');


btnHigh.addEventListener('click', (event) => addTask(event));
btnLow.addEventListener('click', (event) => addTask(event));

function addTask(event) {
	const task = getNewTask(event);
	if (isNotEmpty(task)) {
		const taskNode = getNewNode(task);
		const toDoList = getToDOList(task);
		toDoList.prepend(taskNode);
		list.addTask(task);
	}
}

function getNewTask(event) {
	const parent = event.target.parentNode;
	const name = parent.querySelector('input').value;
	const status = STATUS.TO_DO;
	const priority = parent.id === 'highPriority' ? PRIORITY.HIGH : PRIORITY.LOW;
	const id = list.freeID++;

	parent.querySelector('input').value = '';

	return {
		id,
		name,
		status,
		priority
	};
}

function getNewNode(task) {
	let li = document.createElement('li');
	let label = document.createElement('label');
	let checkbox = document.createElement('input');
	let span = document.createElement('span');
	let p = document.createElement('p');
	let btnDel = document.createElement('button');

	li.classList.add('to-do__item');
	li.id = task.id;
	label.classList.add('to-do__checkbox-wrapper');
	checkbox.type = 'checkbox';
	checkbox.classList.add('to-do__task-checkbox');
	checkbox.addEventListener('click', changeTaskStatus, task);
	p.textContent = task.name;
	p.classList.add('to-do__task-desc');
	btnDel.type = 'button'
	btnDel.classList.add('to-do__del-btn');
	btnDel.addEventListener('click', delTask);

	label.appendChild(checkbox);
	label.appendChild(span);
	li.appendChild(label);
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
	let taskNode = event.target.parentNode;
	const taskID = Number(event.target.parentNode.id);
	taskNode.remove();
	list.delTask(taskID)
}

function listenerForInput(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		addTask(event);
	}
}

function changeTaskStatus(event) {
	let taskNode = event.target.parentNode.parentNode;
	const taskID = Number(taskNode.id);
	list.changeTaskStatus(taskID);
}

function isNotEmpty(task) {
	if (task.name !== '') {
		return true;
	} else {
		return false;
	}
}