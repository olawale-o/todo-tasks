export const editMockTodo = (target, todos) => {
  todos.forEach((todo) => {
    if (target.index === todo.index) {
      todo.description = target.description;
    }
  });
  return todos;
};

export const changeMock = (todo, tasks) => {
  tasks.forEach((task) => {
    if (task.index === todo.index) {
      task.completed = !todo.completed;
    }
  });
  return tasks;
};