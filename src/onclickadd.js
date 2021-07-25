// For Test only////
const createTodo = (todo) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'todo-list');
  li.setAttribute('id', `id-${todo.index}`);
  const div = document.createElement('div');
  div.setAttribute('class', 'field todo-list__task');
  const label = document.createElement('label');
  label.setAttribute('class', 'label');
  label.setAttribute('id', `label-${todo.index}`);
  const checkbox = document.createElement('input');

  const span = document.createElement('span');
  span.setAttribute('class', 'todo-list__text');
  span.setAttribute('id', `span-${todo.index}`);
  span.textContent = todo.description;

  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'todo-task');
  checkbox.checked = todo.completed === true;

  label.appendChild(checkbox);
  const sp = document.createElement('span');
  sp.setAttribute('class', 'checkmark');
  label.appendChild(sp);

  const bin = document.createElement('i');
  bin.setAttribute('class', 'bx bx-trash-alt bin hide');
  bin.setAttribute('id', `bin-${todo.index}`);

  const icon = document.createElement('i');
  icon.setAttribute('class', 'bx bx-dots-vertical-rounded move');
  icon.setAttribute('id', `icon-${todo.index}`);

  div.appendChild(label);
  div.appendChild(span);
  div.appendChild(icon);
  div.appendChild(bin);
  li.appendChild(div);
  //const todoTasks = document.querySelector('#todo-tasks');
  //todoTasks.appendChild(li);
  return li;
};
export default createTodo;