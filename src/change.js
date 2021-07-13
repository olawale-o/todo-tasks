import { setStorage } from './storage.js';

const change = (todo, tasks) => {
  tasks.forEach((task) => {
    if (task.index === todo.index) {
      task.completed = !todo.completed;
    }
  });
  setStorage('TODOS', tasks);
};

export default change;