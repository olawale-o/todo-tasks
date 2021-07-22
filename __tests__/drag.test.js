/**
 * @jest-environment jsdom
*/

import createTodo from '../src/onclickadd.js';
import { localStorageMock } from '../__mocks__/mockStorage.js';
import drop from '../src/drop_prototype.js';

describe('Drag and Drop', () => {
  test('Update index of task1 and task2 after drap and drop in localsStorage', () => {
    localStorageMock.setItem('TODOS', []);
    let todos = localStorageMock.getItem('TODOS');
    const taskOne = { description: 'task 1', completed: false, index: 1 };
    todos.push(taskOne);
    localStorageMock.setItem('TODOS', todos);
    const taskTwo = { description: 'task 2', completed: true, index: 2 };
    todos.push(taskTwo);
    localStorageMock.setItem('TODOS', todos);
    todos = drop(taskTwo, taskOne, todos);
    localStorageMock.setItem('TODOS', todos);
    localStorageMock.getItem.mock.results[0].value = todos;

    expect(localStorageMock.getItem.mock.results[0].value[1].description)
      .toEqual(taskOne.description);
    expect(localStorageMock.getItem.mock.results[0].value[0].description)
      .toEqual(taskTwo.description);
  });

  test('Update index of task1 and task2 after drap and drop on the DOM', () => {
    document.body.innerHTML = '<ul class="todo-tasks" id="todo-tasks"></ul>';
    let todos = [];
    const taskOne = { description: 'task 1', completed: false, index: 1 };
    todos.push(taskOne);
    createTodo(todos[0]);
    const taskTwo = { description: 'task 2', completed: true, index: 2 };
    todos.push(taskTwo);
    createTodo(todos[1]);

    const spanTaskOne = document.querySelector(`#span-${taskOne.index}`);

    expect(spanTaskOne.textContent).toEqual(taskOne.description);
    todos = drop(taskTwo, taskOne, todos);
    const todoTasks = document.querySelector('#todo-tasks');
    todoTasks.innerHTML = '';
    const [firstLi, secondLi] = todos;
    createTodo(firstLi);
    createTodo(secondLi);

    expect(todoTasks.firstChild.textContent).toEqual(taskTwo.description);
    expect(todoTasks.firstChild.id).toEqual(`id-${firstLi.index}`);
    expect(todoTasks.lastChild.textContent).toEqual(taskOne.description);
    expect(todoTasks.lastChild.id).toEqual(`id-${secondLi.index}`);
  });
});