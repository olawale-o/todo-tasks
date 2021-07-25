const clearAllCompletedMock = (todos) => {
  todos = todos.filter((todo) => todo.completed === false);
  todos.forEach((todo, i) => {
    todo.index = i + 1;
  });
  return todos;
};
export default clearAllCompletedMock;