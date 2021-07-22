/**
 * @jest-environment jsdom
*/

import localStoragemock from '../__mocks__/mockStorage.js';
import clearAllCompleted from '../src/clearallcompleted_prototype.js';
import createTodo from '../src/onclickadd.js';

describe('Clear completed Tasks and update localStorage', () => {
  test('Add 3 tasks and remove 2 tasks', () => {
    localStoragemock.setItem('TODOS', []);
    let todos = [];
    const task1 = { description: 'task 1', completed: true, index: 1 };
    const task2 = { description: 'task 2', completed: false, index: 2 };
    const task3 = { description: 'task 3', completed: true, index: 3 };
    todos.push(task1);
    todos.push(task2);
    todos.push(task3);
    localStoragemock.setItem('TODOS', todos);
    todos = clearAllCompleted(todos);
    localStoragemock.setItem('TODOS', todos);
    expect(localStoragemock.getItem('TODOS').length).toEqual(1);
    expect(localStoragemock.getItem('TODOS')[0].description).toEqual('task 2');
    expect(localStoragemock.getItem('TODOS')[0].index).toEqual(1);
  });
});

describe('Clear completed Tasks and update DOM', () => {
  test('Add 3 tasks and remove 2 tasks', () => {
    document.body.innerHTML = '<ul class="todo-tasks" id="todo-tasks"> </ul>';

    let todos = [];
    const task1 = { description: 'task 1', completed: true, index: 1 };
    createTodo(task1);
    const task2 = { description: 'task 2', completed: false, index: 2 };
    createTodo(task2);
    const task3 = { description: 'task 3', completed: true, index: 3 };
    createTodo(task3);
    todos.push(task1);
    todos.push(task2);
    todos.push(task3);
    todos = clearAllCompleted(todos);

    const todoTasks = document.querySelector('#todo-tasks');
    todoTasks.innerHTML = '';
    createTodo(todos[0]);
    const list = todoTasks.querySelectorAll('li');
    expect(list).toHaveLength(1);
    expect(list[0].textContent).toEqual(task2.description);
    expect(list[0].id).toEqual(`id-${todos[0].index}`);
  });
});