/**
 * @jest-environment jsdom
*/

import { editTodo, change } from '../src/edittask_prototype.js';
import localStoragemock from '../__mocks__/mockStorage.js';
import createTodo from '../src/onclickadd.js';

describe('Edit task', () => {
  test('task 1 description should be updated to task one', () => {
    localStoragemock.setItem('TODOS', []);
    let todo = [];
    const task1 = { description: 'task 1', completed: false, index: 1 };
    todo.push(task1);
    const task1Edited = { description: 'task one', completed: false, index: 1 };
    localStoragemock.setItem('TODOS', todo);
    todo = editTodo(task1Edited, todo);
    expect(localStoragemock.getItem('TODOS')[0].description).toEqual(task1Edited.description);
  });

  test('Edit single task on the DOM', () => {
    document.body.innerHTML = '<ul class="todo-tasks" id="todo-tasks"> </ul>';
    let task = [];
    const NewTask1 = { description: 'task 1', completed: false, index: 1 };
    task.push(NewTask1);
    createTodo(task[0]);
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

describe('Status update', () => {
  test('task 1 status should be updated to true', () => {
    localStoragemock.setItem('TODOS', []);
    let todos = [];
    const task1 = { description: 'task 1', completed: false, index: 1 };
    todos.push(task1);
    const task1Statusedited = { description: 'task 1', completed: true, index: 1 };
    localStoragemock.setItem('TODOS', todos);
    todos = change(task1, todos);
    localStoragemock.setItem('TODOS', todos);
    expect(todos[0].completed).toBe(task1Statusedited.completed);
    expect(localStoragemock.getItem('TODOS').length).toBe(1);
  });

  test('Status update on the DOM', () => {
    document.body.innerHTML = '<ul class="todo-tasks" id="todo-tasks"> </ul>';
    let task = [];
    const NewTask1 = { description: 'task 1', completed: false, index: 1 };
    task.push(NewTask1);
    createTodo(task[0]);
    task = change(NewTask1, task);

    const list = document.querySelectorAll('#todo-tasks li');
    const taskLabel = document.querySelector(`#label-${NewTask1.index}`);
    const taskBx = taskLabel.querySelector('input');
    taskBx.checked = task[0].completed;
    expect(list).toHaveLength(1);
    expect(taskBx.checked).toEqual(true);
  });

  test('Add 3 tasks and update status of second task On the DOM', () => {
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

    task = change(NewTask2, task);

    const list = document.querySelectorAll('#todo-tasks li');
    const taskLabel1 = document.querySelector(`#label-${NewTask1.index}`);
    const taskLabel2 = document.querySelector(`#label-${NewTask2.index}`);
    const taskBx1 = taskLabel1.querySelector('input');
    const taskBx2 = taskLabel2.querySelector('input');
    taskBx2.checked = task[1].completed;
    expect(list).toHaveLength(3);
    expect(taskBx2.checked).toEqual(true);

    expect(taskBx1.checked).toEqual(false);
  });
});