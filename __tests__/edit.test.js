/**
 * @jest-environment jsdom
*/

import editTodo from '../src/edittask_prototype.js';
import { localStorageMock } from '../__mocks__/mockStorage.js';
import createTodo from '../src/onclickadd.js';

describe('Edit task', () => {
  test('task 1 description should be updated to task one', () => {
    localStorageMock.setItem('Todos', []);
    let todo = [];
    const task1 = { description: 'task 1', completed: false, index: 1 };
    todo.push(task1);
    const task1Edited = { description: 'task one', completed: false, index: 1 };
    localStorageMock.setItem('Todos', todo);
    todo = editTodo(task1Edited, todo);
    expect(todo[0].description).toEqual(task1Edited.description);
  });

  test('Edit single task on the DOM', () => {
    document.body.innerHTML = '<ul class="todo-tasks" id="todo-tasks"> </ul>';
    let task = [];
    const NewTask1 = { description: 'task 1', completed: false, index: 1 };
    task.push(NewTask1);
    createTodo(task[0])
    const task1Edited = { description: 'task one', completed: false, index: 1 };
    task = editTodo(task1Edited, task);

    const list = document.querySelectorAll('#todo-tasks li');
    const spanTodo = document.querySelector(`#span-${NewTask1.index}`);
    spanTodo.textContent = task1Edited.description;

    expect(list).toHaveLength(1);
    expect(spanTodo.textContent).toEqual(task1Edited.description);
  });

  test('Add 3 tasks and edit second task On the DOM', () => {
    document.body.innerHTML = '<ul class="todo-tasks" id="todo-tasks"> </ul>';
    let task = [];
    const NewTask1 = { description: 'task 1', completed: false, index: 1 };
    task.push(NewTask1);
    createTodo(task[0]);

    const NewTask2 = { description: 'task 2', completed: false, index: 2 };
    task.push(NewTask2);
    createTodo(task[1]);

    const NewTask3 = { description: 'task 3', completed: false, index: 3 };
    task.push(NewTask3);
    createTodo(task[2]);
    const task2Edited = { description: 'task two', completed: false, index: 2 };
    task = editTodo(task2Edited, task);

    const list = document.querySelectorAll('#todo-tasks li');
    const spanTodoOne = document.querySelector(`#span-${NewTask1.index}`);
    const spanTodoTwo = document.querySelector(`#span-${NewTask2.index}`);
    spanTodoTwo.textContent = task2Edited.description;

    expect(list).toHaveLength(3);
    expect(spanTodoTwo.textContent).toEqual(task2Edited.description);
    expect(spanTodoOne.textContent).toEqual(NewTask1.description);
  });
});