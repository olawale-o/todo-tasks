import { getStorage, setStorage } from './storage.js';

const target = document.getElementById('todo-tasks');
target.classList.add('todo-tasks');
const items = target.getElementsByTagName('li');
let current = null;

export function dragStart() {
  current = this;
  for (let b = 0; b < items.length; b += 1) {
    const it = items[b];
    if (it === current) {
      it.classList.add('border');
    }
  }
}

export function dragEnter() {
  if (this !== current) {
    this.style.opacity = 0.2;
  }
}

export function dragLeave(event) {
  event.preventDefault();
  if (this === current) {
    this.style.visibility = 'hidden';
  } else {
    this.style.opacity = 1;
  }
}

export function dragEnd() {
  for (let a = 0; a < items.length; a += 1) {
    const it = items[a];
    it.classList.remove('border');
    this.style.visibility = 'visible';
    it.style.opacity = 1;
  }
}

export function drop(event) {
  event.preventDefault();
  if (this !== current) {
    let currentpos = 0;
    let droppedpos = 0;
    for (let it = 0; it < items.length; it += 1) {
      if (current === items[it]) {
        currentpos = it;
      }
      if (this === items[it]) {
        droppedpos = it;
      }
    }
    if (currentpos < droppedpos) {
      this.parentNode.insertBefore(current, this.nextSibling);
    } else {
      this.parentNode.insertBefore(current, this);
    }
  }
  const movingIndex = parseInt(current.id.split('-')[1], 10);
  const staticIndex = parseInt(this.id.split('-')[1], 10);
  const todos = getStorage('TODOS');
  if (movingIndex !== staticIndex) {
    const movedTodo = todos.find((todo) => todo.index === movingIndex);
    const tds = todos.filter((todo) => todo.index !== movingIndex);
    tds.splice(staticIndex - 1, 0, movedTodo);
    tds.forEach((td, i) => {
      td.index = i + 1;
    });
    for (let b = 0; b < items.length; b += 1) {
      const it = items[b];
      it.id = `id-${b + 1}`;
      const label = it.querySelector('.label');
      label.id = `label-${b + 1}`;
      const checkmark = it.querySelector('.checkmark');
      checkmark.id = `task-${b + 1}`;
      const checkbox = it.querySelector('input');
      checkbox.id = `checkbox-${b + 1}`;
      const todoText = it.querySelector('.todo-list__text');
      todoText.id = `span-${b + 1}`;
      const move = it.querySelector('.move');
      move.id = `icon-${b + 1}`;
      const bin = it.querySelector('.bin');
      bin.id = `bin-${b + 1}`;
    }
    setStorage('TODOS', tds);
  }
}
