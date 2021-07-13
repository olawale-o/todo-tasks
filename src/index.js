import tasks from './tasks.js';
import { isStorage, getStorage, setStorage } from './storage.js';
import { dragStart, dragEnter, dragLeave, dragEnd, drop } from './interactive.js';
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

const todoTasks = document.querySelector('.todo-tasks');

const createTodo = (todo) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'todo-list');
  li.setAttribute('id', `id-${todo.index}`);
  const div = document.createElement('div');
  div.setAttribute('class', 'field todo-list__task');
  const left = document.createElement('div');
  left.setAttribute('class', 'left');
  left.setAttribute('id', `left-${todo.index}`);
  // const checkbox = document.createElement('input');
  // checkbox.setAttribute('type', 'checkbox');
  // checkbox.setAttribute('name', 'todo-task');
  const label = document.createElement('label');
  label.setAttribute('class', 'label');
  label.setAttribute('id', `label-${todo.index}`);
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'todo-task');
  label.appendChild(checkbox);
  const sp = document.createElement('span');
  sp.setAttribute('class', 'checkmark');
  label.appendChild(sp);
  const span = document.createElement('span');
  span.setAttribute('class', 'todo-list__text');
  span.setAttribute('id', `span-${todo.id}`);
  span.textContent = todo.description;
  const icon = document.createElement('i');
  icon.setAttribute('class', 'bx bx-dots-vertical-rounded');
  icon.setAttribute('id', `icon-${todo.index}`);
  left.appendChild(label);
  left.appendChild(span);
  div.appendChild(left);
  div.appendChild(icon);
  li.appendChild(div);
  return li;
};

tasks.forEach((task) => {
  todoTasks.appendChild(createTodo(task));
});

const target = document.getElementById('todo-tasks');
const items = target.getElementsByTagName('li');

for (let a = 0; a < items.length; a += 1) {
  // (B1) ATTACH DRAGGABLE
  const i = items[a];
  i.draggable = true;

  // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
  i.addEventListener('dragstart', dragStart);

  // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
  i.addEventListener('dragenter', dragEnter);

  // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
  i.addEventListener('dragleave', dragLeave);

  // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
  i.addEventListener('dragend', dragEnd);

  // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
  i.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  // (B7) ON DROP - DO SOMETHING
  i.addEventListener('drop', drop);
}