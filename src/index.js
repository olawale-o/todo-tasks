import tasks from './tasks.js';
import { isStorage, getStorage, setStorage } from './storage.js';
import {
  dragStart, dragEnter, dragLeave, dragEnd, drop,
} from './interactive.js';
import change from './change.js';
import './stylesheet/style.css';

const todoKey = 'TODOS';
let todos = [];

if (isStorage(todoKey)) {
  todos = getStorage(todoKey);
} else {
  setStorage(todoKey, tasks);
  todos = getStorage(todoKey);
}

const todoTasks = document.querySelector('#todo-tasks');

const target = document.getElementById('todo-tasks');
const items = target.getElementsByTagName('li');

const onDeleteTodo = (todo) => {
  console.log('wales')
  console.log(todo)
}

const dragAll = () => {
  for (let a = 0; a < items.length; a += 1) {
    const i = items[a];
    i.draggable = true;
    i.addEventListener('dragstart', dragStart);
    i.addEventListener('dragenter', dragEnter);
    i.addEventListener('dragleave', dragLeave);
    i.addEventListener('dragend', dragEnd);
    i.addEventListener('dragover', (event) => {
      event.preventDefault();
      i.style.opacity = 0.2;
    });
    i.addEventListener('drop', drop);
  }
};

const createTodo = (todo) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'todo-list');
  li.setAttribute('id', `id-${todo.index}`);
  const div = document.createElement('div');
  div.setAttribute('class', 'field todo-list__task');
  const left = document.createElement('div');
  left.setAttribute('class', 'left');
  left.setAttribute('id', `left-${todo.index}`);
  const label = document.createElement('label');
  label.setAttribute('class', 'label');
  label.setAttribute('id', `label-${todo.index}`);
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'todo-task');
  checkbox.checked = todo.completed === true;
  checkbox.onchange = () => {
    change(todo, todos);
    if (todo.completed) {
      span.style.textDecoration = 'line-through';
    } else {
      span.style.textDecoration = 'none';
    }
  };
  label.appendChild(checkbox);
  const sp = document.createElement('span');
  sp.setAttribute('class', 'checkmark');
  label.appendChild(sp);
  const span = document.createElement('span');
  span.setAttribute('class', 'todo-list__text');
  span.setAttribute('id', `span-${todo.index}`);
  span.textContent = todo.description;
  const icon = document.createElement('i');
  icon.setAttribute('class', 'bx bx-dots-vertical-rounded');
  icon.setAttribute('id', `icon-${todo.index}`);
  icon.onmousedown = dragAll;

  const bin = document.createElement('i');
  bin.setAttribute('class', 'bx bx-trash-alt bin');
  bin.setAttribute('id', `bin-${todo.index}`);

  bin.onclick = (event) => {
    console.log(event)
    onDeleteTodo()
  }

  left.appendChild(label);
  left.appendChild(span);
  div.appendChild(left);
  div.appendChild(icon);
  li.appendChild(div);
  return li;
};

todos.forEach((task) => {
  todoTasks.appendChild(createTodo(task));
});
