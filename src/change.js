import { setStorage, getStorage } from './storage.js';

const change = (todo) => {
  const tasks = getStorage('TODOS');
  tasks.forEach((task) => {
    if (task.index === todo) {
      task.completed = !task.completed;
    }
  });
  setStorage('TODOS', tasks);
  return tasks;
};

export default change;