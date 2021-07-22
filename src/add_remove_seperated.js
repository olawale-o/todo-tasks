export const addNewTodo = (task, todos) => {
    const newTodo = {
      index: todos.length < 1 ? 1 : todos.length + 1,
      description: task,
      completed: false,
    };
    return newTodo;
  };
  
  export const onDeleteTodo = (target, todos) => {
    todos = todos.filter((todo) => target !== todo.index);
    return todos;
  };