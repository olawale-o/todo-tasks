import editTodo from '../src/edittask_prototype.js';
import { localStorageMock } from '../__mocks__/mockStorage.js';

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
});