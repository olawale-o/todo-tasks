/**
 * @jest-environment jsdom
 */

import onDeleteMockTodo from '../__mocks__/remove-todo-mock.js';
import createMockTodo from '../__mocks__/create-todo-mock.js';

describe('Test Dom on Add new Task', () => {
  test('Add New Task ', () => {
    document.body.innerHTML = '<ul class="todo-tasks" id="todo-tasks"> </ul>';
    const task = [];
    const NewTask1 = { description: 'task 1', completed: false, index: 1 };
    task.push(NewTask1);
    const NewTask2 = { description: 'task 2', completed: false, index: 2 };
    task.push(NewTask2);
    const NewTask3 = { description: 'task 3', completed: false, index: 3 };
    task.push(NewTask3);
    const NewTask4 = { description: 'task 4', completed: false, index: 4 };
    task.push(NewTask4);
    const NewTask5 = { description: 'task 5', completed: false, index: 5 };
    task.push(NewTask5);
    const todoTasks = document.querySelector('#todo-tasks');
    todoTasks.appendChild(createMockTodo(task[0]));
    todoTasks.appendChild(createMockTodo(task[1]));
    todoTasks.appendChild(createMockTodo(task[2]));
    todoTasks.appendChild(createMockTodo(task[3]));
    todoTasks.appendChild(createMockTodo(task[4]));
    const list = document.querySelectorAll('#todo-tasks li');
    expect(list).toHaveLength(5);
  });
});

describe('Test Dom on Remove Task', () => {
  test('Remove Task ', () => {
    document.body.innerHTML = '<ul class="todo-tasks" id="todo-tasks"> </ul>';
    let task = [];
    const NewTask1 = { description: 'task 1', completed: false, index: 1 };
    task.push(NewTask1);
    const NewTask2 = { description: 'task 2', completed: false, index: 2 };
    task.push(NewTask2);
    const NewTask3 = { description: 'task 3', completed: false, index: 3 };
    task.push(NewTask3);

    const todoTasks = document.querySelector('#todo-tasks');
    todoTasks.appendChild(createMockTodo(task[0]));
    todoTasks.appendChild(createMockTodo(task[1]));
    todoTasks.appendChild(createMockTodo(task[2]));
    task = onDeleteMockTodo(task[0].index, task);
    todoTasks.innerHTML = '';
    task.forEach((t) => {
      todoTasks.appendChild(createMockTodo(t))
    })
    let list = document.querySelectorAll('#todo-tasks li');
    expect(list).toHaveLength(2);

    task.push(NewTask3);
    todoTasks.appendChild(createMockTodo(task[0]));
    list = document.querySelectorAll('#todo-tasks li');
    expect(list).toHaveLength(3);
  });
});