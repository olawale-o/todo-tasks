export default function drop(movedTask, staticTask, todos) {
  let tds = [];
  const movingIndex = movedTask.index;
  const staticIndex = staticTask.index;

  if (movingIndex !== staticIndex) {
    const movedTodo = todos.find((todo) => todo.index === movingIndex);
    tds = todos.filter((todo) => todo.index !== movingIndex);
    tds.splice(staticIndex - 1, 0, movedTodo);
    tds.forEach((td, i) => {
      td.index = i + 1;
    });
  }
  return tds;
}