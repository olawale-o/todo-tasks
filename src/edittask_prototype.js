export const editTodo = (target, todos) => {
  todos.forEach((todo) => {
    if (target.index === todo.index) {
      todo.description = target.description;
    }
  });
  return todos;
};

export const change = (todo, tasks) => {
  tasks.forEach((task) => {
    if (task.index === todo.index) {
      task.completed = !todo.completed;
    }
  });
  return tasks;
};