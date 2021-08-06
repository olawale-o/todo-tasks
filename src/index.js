import { isStorage, getStorage, setStorage } from './storage.js';
import {
  dragStart, dragEnter, dragLeave, dragEnd, drop,
} from './interactive.js';
import change from './change.js';
import {
  addNewTodo, clearAllCompletedTodos, editTodo, onDeleteTodo, updateTodosStorage,
} from './add-remove.js';

import './stylesheet/style.css';

const todoKey = 'TODOS';
let todos = [];

if (isStorage(todoKey)) {
  todos = getStorage(todoKey);
} else {
  setStorage(todoKey, todos);
  todos = getStorage(todoKey);
}

const todoTasks = document.querySelector('#todo-tasks');

const target = document.getElementById('todo-tasks');
const items = target.getElementsByTagName('li');

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
  checkbox.setAttribute('id', `checkbox-${todo.index}`);

  const span = document.createElement('span');
  span.setAttribute('class', 'todo-list__text');
  span.setAttribute('id', `span-${todo.index}`);
  span.textContent = todo.description;
  span.style.textDecoration = todo.completed === true ? 'line-through' : 'none';
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'todo-task');
  checkbox.checked = todo.completed === true;
  checkbox.addEventListener('change', (event) => {
    const currentTodo = parseInt(event.target.id.split('-')[1], 10);
    const newTodos = change(currentTodo);
    todoTasks.innerHTML = '';
    newTodos.forEach((task) => {
      todoTasks.appendChild(createTodo(task));
    });
  });
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

  span.addEventListener('click', () => {
    span.setAttribute('contenteditable', true);
    span.focus();
  });

  bin.addEventListener('mousedown', (event) => {
    const currentTodo = parseInt(event.target.id.split('-')[1], 10);
    todos = onDeleteTodo(currentTodo);

    todoTasks.innerHTML = '';
    todos.forEach((td, i) => {
      td.index = i + 1;
    });

    todos.forEach((task) => {
      todoTasks.appendChild(createTodo(task));
    });
    setStorage('TODOS', todos);
  });
  let completed = null;
  span.addEventListener('focus', (event) => {
    toggleButtons();
    if (event.target.style.textDecoration === 'line-through') {
      span.style.textDecorationColor = 'transparent';
      completed = true;
    }
    li.classList.add('focus');
  });

  span.addEventListener('blur', (event) => {
    toggleButtons();
    if (completed) {
      event.target.style.textDecorationColor = 'initial';
      completed = null;
    }
    editTodo(event.target);
    li.classList.remove('focus');
    span.removeAttribute('contenteditable');
  });

  return li;
};

todos.forEach((task) => {
  todoTasks.appendChild(createTodo(task));
});

const validateField = (input) => input.trim().length > 0;

const addkey = document.querySelector('#add');
const task = document.querySelector('#task');

addkey.addEventListener('click', () => {
  if (!validateField(task.value)) {
    return false;
  }
  const newTodo = addNewTodo(task.value, todos);
  updateTodosStorage(newTodo, todos);
  todoTasks.appendChild(createTodo(newTodo));
  task.value = '';
  return true;
});

task.addEventListener('keydown', (event) => {
  if (event.which === 13) {
    if (!validateField(task.value)) {
      return false;
    }
    const newTodo = addNewTodo(task.value, todos);
    updateTodosStorage(newTodo, todos);
    todoTasks.appendChild(createTodo(newTodo));
    task.value = '';
  }
  return true;
});

const trashAll = document.querySelector('#trash-all');
trashAll.addEventListener('click', () => {
  const tds = clearAllCompletedTodos();
  todoTasks.innerHTML = '';
  tds.forEach((task) => {
    todoTasks.appendChild(createTodo(task));
  });
});
