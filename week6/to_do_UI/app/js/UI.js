import {
	STATUS,
	PRIORITY,
	list,
	DEFAULT_STATUS
} from './main.js';

const EMPTY_STRING = '';

const UI_ELEMENTS = {
	INPUT_HIGH: document.getElementById('inputHigh'),
	INPUT_LOW: document.getElementById('inputLow'),
	BTN_ADD_HIGH: document.getElementById('btnHigh'),
	BTN_ADD_LOW: document.getElementById('btnLow'),
	LIST_WITH_HIGH_PRIORITY: document.getElementById('highPriorityList'),
	LIST_WITH_LOW_PRIORITY: document.getElementById('lowPriorityList')
}

UI_ELEMENTS.INPUT_HIGH.addEventListener('keydown', (event) => listenerForInput(event));
UI_ELEMENTS.INPUT_LOW.addEventListener('keydown', (event) => listenerForInput(event));
UI_ELEMENTS.BTN_ADD_HIGH.addEventListener('click', (event) => addTask(event));
UI_ELEMENTS.BTN_ADD_LOW.addEventListener('click', (event) => addTask(event));

function addTask(event) {
	const task = createTask(event);
	if (isNotEmpty(task)) {
		list.addTask(task);
		const taskNode = createNode(task);
		addItemToList(taskNode, task);
	}
}

function createTask(event) {
	const parent = event.target.parentNode;
	const name = parent.querySelector('input').value;
	const status = DEFAULT_STATUS;
	const priority = parent.id === 'highPriority' ? PRIORITY.HIGH : PRIORITY.LOW;
	const id = list.idCounter++;

	parent.querySelector('input').value = EMPTY_STRING;

	return {
		id,
		name,
		status,
		priority
	};
}

function createNode(task) {
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

function addItemToList(taskNode, task) {
	const toDoList = getToDOList(task);
	toDoList.prepend(taskNode);
}

function getToDOList(task) {
	let toDoList;
	if (task.priority === PRIORITY.HIGH) {
		toDoList = UI_ELEMENTS.LIST_WITH_HIGH_PRIORITY;
	} else {
		toDoList = UI_ELEMENTS.LIST_WITH_LOW_PRIORITY;
	}
	return toDoList;
}

function delTask(event) {
	let taskNode = event.target.parentNode;
	const taskID = Number(event.target.parentNode.id);
	list.delTask(taskID); //  В первую очередь работа с данными, и только потом с представлением!! ->>>
	taskNode.remove(); // ->>>
}

function changeTaskStatus(event) {
	let taskNode = event.target.parentNode.parentNode;
	const taskID = Number(taskNode.id);
	list.changeTaskStatus(taskID);
}

function listenerForInput(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		addTask(event);
	}
}

function isNotEmpty(task) {
	try {
		if (task.name === EMPTY_STRING) {
			throw "Error: Введите название задачи!"
		} else {
			return true;
		}
	} catch (error) {
		console.log(error);
	}

}