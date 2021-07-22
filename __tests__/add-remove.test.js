import { addNewTodo, onDeleteTodo } from '../src/add-remove.js';
import { localStorageMock } from '../__mocks__/mockStorage.js';

describe('Todo', () => {
  describe('Add Todo', () => {
    test('add task1', () => {
      const task1 = 'task 1';
      const todos = [];
      const newTodo1 = addNewTodo(task1, todos);
      todos.push(newTodo1);

      expect(todos[0]).toEqual(newTodo1);
    });
    test('add task1,task2 and task3', () => {
      const task1 = 'task 1';
      const task2 = 'task 2';
      const task3 = 'task 3';
      const todos = [];
      const newTodo1 = addNewTodo(task1, todos);
      todos.push(newTodo1);
      const newTodo2 = addNewTodo(task2,todos);
      todos.push(newTodo2);
      const newTodo3 = addNewTodo(task3,todos);
      todos.push(newTodo3);
      expect(todos[0]).toEqual(newTodo1);
      expect(todos[1]).toEqual(newTodo2);
      expect(todos[2]).toEqual(newTodo3);
    });
  });

  describe('Delete Todo', () => {
    test('add task1 and remove task1,todos will reduced to 0', () => {
      let todos = [];
      const task1 = { description: 'task 1', completed: false, index: 1 };
      todos.push(task1);
      todos = onDeleteTodo(task1.index, todos);
      expect(todos.length).toEqual(0);
    });

    test('add task1,task2 and task3,then remove task2.', () => {
      let todos = [];
      const task1 = { description: 'task 1', completed: false, index: 1 };
      todos.push(task1);
      const task2 = { description: 'task 2', completed: false, index: 2 };
      todos.push(task2);
      const task3 = { description: 'task 3', completed: false, index: 3 };
      todos.push(task3);
      todos = onDeleteTodo(task2.index, todos);
      expect(todos.length).toEqual(2);
    });
  });

  describe('Storage', () => {
    afterEach(() => localStorageMock.getItem.mockClear());

    describe('Storage -> Add', () => {
      it('should add task 1 to localStorage', () => {
        localStorageMock.setItem('TODOS', []);
        const todos = localStorageMock.getItem('TODOS');
        const newTaskOne = { description: 'task 1', completed: false, index: 1 };
        todos.push(newTaskOne);
        localStorageMock.setItem('TODOS', todos);

        expect(localStorageMock.getItem.mock.calls.length).toBe(1);
        expect(localStorageMock.getItem).toHaveBeenCalled();
        expect(localStorageMock.getItem).toHaveBeenCalledWith('TODOS');
        expect(localStorageMock.setItem).toHaveBeenCalled();
        expect(localStorageMock.getItem.mock.results[0].value[0]).toEqual(newTaskOne);
      });

      it('should add task 1 and task 2 to localStorage', () => {
        localStorageMock.setItem('TODOS', []);
        const todos = localStorageMock.getItem('TODOS');
        const newTaskOne = { description: 'task 1', completed: false, index: 1 };
        todos.push(newTaskOne);
        localStorageMock.setItem('TODOS', todos);
        expect(localStorageMock.getItem.mock.results[0].value.length).toBe(1);

        const newTaskTwo = { description: 'task 2', completed: false, index: 2 };
        todos.push(newTaskTwo);

        localStorageMock.getItem.mock.results[0].value = todos;
        expect(localStorageMock.getItem.mock.results[0].value.length).toBe(2);

        expect(localStorageMock.getItem.mock.results[0].value[0]).toEqual(newTaskOne);
        expect(localStorageMock.getItem.mock.results[0].value[1]).toEqual(newTaskTwo);
      });
    });

    describe('Storage -> Remove', () => {
      it('should remove task 1 from localStorage', () => {
        localStorageMock.setItem('TODOS', []);
        let todos = localStorageMock.getItem('TODOS');

        const newTaskOne = { description: 'task one', completed: false, index: 1 };
        todos.push(newTaskOne);

        todos = todos.filter((todo) => todo.index !== newTaskOne.index);
        localStorageMock.setItem('TODOS', todos);

        localStorageMock.getItem.mock.results[0].value = todos;
        expect(localStorageMock.getItem.mock.results[0].value.length).toEqual(0);
      });

      it('should add task 1 and task 2 and remove task 1 from localStorage', () => {
        localStorageMock.setItem('TODOS', []);
        let todos = localStorageMock.getItem('TODOS');

        const newTaskOne = { description: 'task one', completed: false, index: 1 };
        todos.push(newTaskOne);
        localStorageMock.setItem('TODOS', todos);

        const newTaskTwo = { description: 'task 2', completed: false, index: 2 };
        todos.push(newTaskTwo);
        localStorageMock.setItem('TODOS', todos);

        todos = todos.filter((todo) => newTaskOne.index !== todo.index);

        localStorageMock.getItem.mock.results[0].value = todos;

        expect(localStorageMock.getItem.mock.results[0].value.length).toEqual(1);
        expect(localStorageMock.getItem.mock.results[0].value[0]).toEqual(newTaskTwo);
      });
    });
  });
});
