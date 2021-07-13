import tasks from './tasks.js';
import './stylesheet/style.css';

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