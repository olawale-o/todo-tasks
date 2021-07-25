// For the tests only
// import createTodo from './onclickadd.js';

// const onDeleteTodo = (target, todos) => {
//   todos = todos.filter((todo) => target !== todo.index);
//   document.querySelector('#todo-tasks').innerHTML = '';
//   todos.forEach((task) => {
//     createTodo(task);
//   });
// };

const onDeleteTodo = (target, todos) => {
  todos = todos.filter((todo) => target !== todo.index);
  return todos;
};

export default onDeleteTodo;
