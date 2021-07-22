const editTodo = (target, todos) => {
  todos.forEach((todo) => {
    if (target.index === todo.index) {
      todo.description = target.description;
    }
  });
  return todos;
};

export default editTodo;