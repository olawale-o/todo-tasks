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

const updateTodo = (target) => {
  const id = parseInt(target.id.split('-')[1], 10);
  todos.forEach((todo) => {
    if (id === todo.index) {
      todo.description = target.textContent;
    }
  });
  setStorage('TODOS', todos);
};

const onDeleteTodo = (target) => {
  const id = parseInt(target.split('-')[1], 10);
  todos = todos.filter((todo) => id !== todo.index);
  todoTasks.innerHTML = '';
  todos.forEach((td, i) => {
    td.index = i + 1;
  });
};

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

  const label = document.createElement('label');
  label.setAttribute('class', 'label');
  label.setAttribute('id', `label-${todo.index}`);
  const checkbox = document.createElement('input');

  const span = document.createElement('span');
  span.setAttribute('class', 'todo-list__text');
  span.setAttribute('id', `span-${todo.index}`);
  span.textContent = todo.description;

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

  const bin = document.createElement('i');
  bin.setAttribute('class', 'bx bx-trash-alt bin hide');
  bin.setAttribute('id', `bin-${todo.index}`);

  const icon = document.createElement('i');
  icon.setAttribute('class', 'bx bx-dots-vertical-rounded move');
  icon.setAttribute('id', `icon-${todo.index}`);
  icon.onmousedown = dragAll;

  div.appendChild(label);
  div.appendChild(span);
  div.appendChild(icon);
  div.appendChild(bin);
  li.appendChild(div);

  const toggleButtons = () => {
    bin.classList.toggle('hide');
    icon.classList.toggle('hide');
  };

  li.addEventListener('click', () => {
    span.setAttribute('contenteditable', true);
    span.focus();
  });

  bin.addEventListener('mousedown', (event) => {
    onDeleteTodo(event.target.id);
    todos.forEach((task) => {
      todoTasks.appendChild(createTodo(task));
    });
    setStorage('TODOS', todos);
  });

  span.addEventListener('focus', () => {
    toggleButtons();
    li.classList.add('focus');
  });

  span.addEventListener('blur', (event) => {
    toggleButtons();
    updateTodo(event.target);
    li.classList.remove('focus');
    span.removeAttribute('contenteditable');
  });

  return li;
};

todos.forEach((task) => {
  todoTasks.appendChild(createTodo(task));
});
