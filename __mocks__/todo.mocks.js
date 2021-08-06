const mockTodo = () => {
  let todos = [];
  const taskOne = { description: 'task 1', completed: false, index: 1 };
  todos.push(taskOne);
  const taskTwo = { description: 'task 2', completed: false, index: 2 };
  todos.push(taskTwo);
  const taskThree = { description: 'task 3', completed: false, index: 3 };
  todos.push(taskThree);
  return todos;
};

export default mockTodo;