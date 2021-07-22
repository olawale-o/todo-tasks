/**
 * @jest-environment jsdom
*/

import createTodo from '../src/onclickadd.js';
import localStoragemock from '../__mocks__/mockStorage.js';
import drop from '../src/drop_prototype.js';

describe('Drag and Drop', () => {
  test('Update index of task1 and task2 after drap and drop in localsStorage', () => {
    localStoragemock.setItem('TODOS', []);
    let todos = [];
    const taskOne = { description: 'task 1', completed: false, index: 1 };
    todos.push(taskOne);
    localStoragemock.setItem('TODOS', todos);
    const taskTwo = { description: 'task 2', completed: true, index: 2 };
    todos.push(taskTwo);
    localStoragemock.setItem('TODOS', todos);
    todos = drop(taskTwo, taskOne, todos);
    localStoragemock.setItem('TODOS', todos);
    expect(localStoragemock.getItem('TODOS')[1].description)
      .toEqual(taskOne.description);
    expect(localStoragemock.getItem('TODOS')[0].description)
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