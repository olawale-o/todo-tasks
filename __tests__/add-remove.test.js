import { addNewTodo, onDeleteTodo } from '../src/add-remove.js';
import { localStorageMock } from '../__mocks__/mockStorage.js';

describe('Todo', () => {
  describe('Add Todo', () => {
    test('task 1 should be equal {description; task 1, completed: false, index: 1} ', () => {
      const task = 'task 1';
      const todos = [];
      const expectedTodo = { description: 'task 1', completed: false, index: 1 };
      const newTodo = addNewTodo(task, todos);
      expect(newTodo).toEqual(expectedTodo);
    });
  });

  describe('Delete Todo', () => {
    test('task 1 should be equal {description; task 1, completed: false, index: 1} ', () => {
      let todos = [];
      const expectedTodo = { description: 'task 1', completed: false, index: 1 };

      todos = onDeleteTodo(expectedTodo.id, todos);

      expect(todos.length).toEqual(0);
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
