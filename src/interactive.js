import { getStorage, setStorage } from './storage.js';

const target = document.getElementById('todo-tasks');
target.classList.add('todo-tasks');
const items = target.getElementsByTagName('li');
let current = null;
let underLay = null;

export function dragStart() {
  current = this;
  for (let b = 0; b < items.length; b += 1) {
    const it = items[b];
    // apply this style to list except the darraged one;
    // if (it !== current) {
    //   it.classList.add('hint');
    // }
    if (it === current) {
      it.classList.add('border');
    }
  }
}

export function dragEnter() {
  if (this !== current) {
    // this.classList.add('active');
    underLay = this;
  }
}

export function dragLeave(event) {
  event.preventDefault();
  if (this === current) {
    this.style.visibility = 'hidden';
  }
  // this.classList.remove('active');
  // if (this !== current) {
  //   let currentpos = 0;
  //   let leavePos = 0;
  //   for (let it = 0; it < items.length; it += 1) {
  //     if (current === items[it]) {
  //       currentpos = it;
  //       console.log(currentpos) //moving
  //     }
  //     if (this === items[it]) {
  //       this.parentNode.removeChild(items[it])
  //     }
  //   }
  //   // if (currentpos < leavePos) {
  //   //   // inserts after
  //   //   this.parentNode.insertBefore(this, current);
  //   // } else {
  //   //   // inserts before
  //   //   this.parentNode.insertBefore(this, current.nextSibling);
  //   // }
  // }
}

export function dragEnd() {
  for (let a = 0; a < items.length; a += 1) {
    const it = items[a];
    it.classList.remove('border');
    // it.classList.remove('hint');
    it.style.visibility = 'visible';
    // it.classList.remove('active');
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
      // inserts after
      this.parentNode.insertBefore(current, this.nextSibling);
    } else {
      // inserts before
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
      const span = it.querySelector('span');
      span.id = `task-${b + 1}`;
    }
    setStorage('TODOS', tds);
  }
}
