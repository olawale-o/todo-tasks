import tasks from './tasks.js';
import './stylesheet/style.css';

const todoTasks = document.querySelector('.todo-tasks');

const createTodo = (todo) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'todo-list');
  const div = document.createElement('div');
  div.setAttribute('class', 'field todo-list__task');
  const left = document.createElement('div');
  left.setAttribute('class', 'left');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'todo-task');
  const span = document.createElement('span');
  span.setAttribute('class', 'todo-list__text');
  span.textContent = todo.description;
  const icon = document.createElement('i');
  icon.setAttribute('class', 'bx bx-dots-vertical-rounded');
  left.appendChild(checkbox);
  left.appendChild(span);
  div.appendChild(left);
  div.appendChild(icon);
  li.appendChild(div);
  return li;
};

tasks.forEach((task) => {
  todoTasks.appendChild(createTodo(task));
});