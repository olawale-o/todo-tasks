import { setStorage } from './storage.js';

export const addNewTodo = (task, todos) => {
  const newTodo = {
    description: task.value,
    completed: false,
  };

  if (todos.length < 1) {
    newTodo.index = 1;
    todos.push(newTodo);
    setStorage('TODOS', todos);
  } else {
    newTodo.index = todos.length + 1;
    todos.push(newTodo);
    setStorage('TODOS', todos);
  }
  return newTodo;
};

export const clearAllCompletedTodos = (todos) => {
  todos = todos.filter((todo) => todo.completed === false);
  todos.forEach((todo, i) => {
    todo.index = i + 1;
  });
  setStorage('TODOS', todos);
  return todos;
};

export const editTodo = (target, todos) => {
  const id = parseInt(target.id.split('-')[1], 10);
  todos.forEach((todo) => {
    if (id === todo.index) {
      todo.description = target.textContent;
    }
  });
  setStorage('TODOS', todos);
};

export const onDeleteTodo = (target, todos) => {
  const id = parseInt(target.split('-')[1], 10);
  todos = todos.filter((todo) => id !== todo.index);
  return todos;
};