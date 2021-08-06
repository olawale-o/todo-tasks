import { setStorage, getStorage } from './storage.js';

export const updateTodosStorage = (newTodo, todos) => {
  todos.push(newTodo);
  setStorage('TODOS', todos);
};

export const addNewTodo = (task, todos) => {
  const newTodo = {
    index: todos.length < 1 ? 1 : todos.length + 1,
    description: task,
    completed: false,
  };
  return newTodo;
};

export const clearAllCompletedTodos = () => {
  let todos = getStorage('TODOS');
  todos = todos.filter((todo) => todo.completed === false);
  todos.forEach((todo, i) => {
    todo.index = i + 1;
  });
  setStorage('TODOS', todos);
  return todos;
};

export const editTodo = (target) => {
  const todos = getStorage('TODOS');
  const id = parseInt(target.id.split('-')[1], 10);
  todos.forEach((todo) => {
    if (id === todo.index) {
      todo.description = target.textContent;
    }
  });
  setStorage('TODOS', todos);
};

export const onDeleteTodo = (target) => {
  let todos = getStorage('TODOS');
  todos = todos.filter((todo) => target !== todo.index);
  return todos;
};