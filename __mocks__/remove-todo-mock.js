// For the tests only
const onDeleteMockTodo = (target, todos) => {
  todos = todos.filter((todo) => target !== todo.index);
  return todos;
};

export default onDeleteMockTodo;
