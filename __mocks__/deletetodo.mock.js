import mockTodo from './todo.mocks.js';

const onDeleteTodoMock = (target) => {
  let todos = mockTodo();
  todos = todos.filter((todo) => target !== todo.index);
  return todos;
};

export default onDeleteTodoMock;