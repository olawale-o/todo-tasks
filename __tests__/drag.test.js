/**
 * @jest-environment jsdom
*/

import createMockTodo from '../__mocks__/create-todo-mock.js';
import localStoragemock from '../__mocks__/mockStorage.js';
import drop from '../__mocks__/drop-mock.js';

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
    expect(localStoragemock.getItem('TODOS').length).toBe(2);
    expect(localStoragemock.getItem('TODOS')[1].description)
      .toEqual(taskOne.description);
    expect(localStoragemock.getItem('TODOS')[1].index)
      .toEqual(2);
    expect(localStoragemock.getItem('TODOS')[0].description)
      .toEqual(taskTwo.description);
    expect(localStoragemock.getItem('TODOS')[0].index)
      .toEqual(1);
  });

  test('Update index of task1 and task2 after drap and drop on the DOM', () => {
    document.body.innerHTML = '<ul class="todo-tasks" id="todo-tasks"></ul>';
    const todoTasks = document.querySelector('#todo-tasks');
    let todos = [];
    const taskOne = { description: 'task 1', completed: false, index: 1 };
    todos.push(taskOne);
    todoTasks.appendChild(createMockTodo(todos[0]));
    const taskTwo = { description: 'task 2', completed: true, index: 2 };
    todos.push(taskTwo);
    todoTasks.appendChild(createMockTodo(todos[1]));

    const spanTaskOne = document.querySelector(`#span-${taskOne.index}`);

    expect(spanTaskOne.textContent).toEqual(taskOne.description);
    todos = drop(taskTwo, taskOne, todos);
    todoTasks.innerHTML = '';
    const [firstLi, secondLi] = todos;
    todoTasks.appendChild(createMockTodo(firstLi));
    todoTasks.appendChild(createMockTodo(secondLi));

    expect(todoTasks.firstChild.textContent).toEqual(taskTwo.description);
    expect(todoTasks.firstChild.id).toEqual(`id-${firstLi.index}`);
    expect(todoTasks.lastChild.textContent).toEqual(taskOne.description);
    expect(todoTasks.lastChild.id).toEqual(`id-${secondLi.index}`);
  });
});