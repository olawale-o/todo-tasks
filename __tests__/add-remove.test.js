import { addNewTodo, onDeleteTodo } from '../src/add-remove.js';
import localStoragemock from '../__mocks__/mockStorage.js';

describe('Todo', () => {
  describe('Add Todo', () => {
    test('add taskOne', () => {
      const taskOne = 'task 1';
      const todos = [];
      const newTodoOne = addNewTodo(taskOne, todos);
      todos.push(newTodoOne);

      expect(todos[0]).toEqual(newTodoOne);
    });
    test('add taskOne,taskTwo and taskThree', () => {
      const taskOne = 'task 1';
      const taskTwo = 'task 2';
      const taskThree = 'task 3';
      const todos = [];
      const newTodoOne = addNewTodo(taskOne, todos);
      todos.push(newTodoOne);
      const newTodoTwo = addNewTodo(taskTwo, todos);
      todos.push(newTodoTwo);
      const newTodoThree = addNewTodo(taskThree, todos);
      todos.push(newTodoThree);
      expect(todos[0]).toEqual(newTodoOne);
      expect(todos[1]).toEqual(newTodoTwo);
      expect(todos[2]).toEqual(newTodoThree);
    });
  });

  describe('Delete Todo', () => {
    test('add taskOne and remove taskOne,todos will reduced to 0', () => {
      let todos = [];
      const taskOne = { description: 'task 1', completed: false, index: 1 };
      todos.push(taskOne);
      todos = onDeleteTodo(taskOne.index, todos);
      expect(todos.length).toEqual(0);
    });

    test('add taskOne,taskTwo and taskThree,then remove taskTwo.', () => {
      let todos = [];
      const taskOne = { description: 'task 1', completed: false, index: 1 };
      todos.push(taskOne);
      const taskTwo = { description: 'task 2', completed: false, index: 2 };
      todos.push(taskTwo);
      const taskThree = { description: 'task 3', completed: false, index: 3 };
      todos.push(taskThree);
      todos = onDeleteTodo(taskTwo.index, todos);
      expect(todos.length).toEqual(2);
    });
  });

  describe('Storage', () => {
    describe('Storage -> Add', () => {
      it('should add task 1 to localStorage', () => {
        localStoragemock.setItem('TODOS', []);
        const todos = [];
        const newTaskOne = { description: 'task 1', completed: false, index: 1 };
        todos.push(newTaskOne);
        localStoragemock.setItem('TODOS', todos);

        expect(localStoragemock.getItem('TODOS').length).toBe(1);
        expect(localStoragemock.getItem('TODOS')[0]).toEqual(newTaskOne);
      });

      it('should add task 1 and task 2 to localStorage', () => {
        localStoragemock.setItem('TODOS', []);
        const todos = [];
        const newTaskOne = { description: 'task 1', completed: false, index: 1 };
        todos.push(newTaskOne);
        localStoragemock.setItem('TODOS', todos);
        expect(localStoragemock.getItem('TODOS').length).toBe(1);

        const newTaskTwo = { description: 'task 2', completed: false, index: 2 };
        todos.push(newTaskTwo);

        localStoragemock.setItem('TODOS', todos);
        expect(localStoragemock.getItem('TODOS').length).toBe(2);

        expect(localStoragemock.getItem('TODOS')[0]).toEqual(newTaskOne);
        expect(localStoragemock.getItem('TODOS')[1]).toEqual(newTaskTwo);
      });
    });

    describe('Storage -> Remove', () => {
      it('should remove task 1 from localStorage', () => {
        localStoragemock.setItem('TODOS', []);
        let todos = [];

        const newTaskOne = { description: 'task one', completed: false, index: 1 };
        todos.push(newTaskOne);

        todos = todos.filter((todo) => todo.index !== newTaskOne.index);
        localStoragemock.setItem('TODOS', todos);

        expect(localStoragemock.getItem('TODOS').length).toEqual(0);
      });

      it('should add task 1 and task 2 and remove task 1 from localStorage', () => {
        localStoragemock.setItem('TODOS', []);
        let todos = [];

        const newTaskOne = { description: 'task one', completed: false, index: 1 };
        todos.push(newTaskOne);
        localStoragemock.setItem('TODOS', todos);

        const newTaskTwo = { description: 'task 2', completed: false, index: 2 };
        todos.push(newTaskTwo);
        localStoragemock.setItem('TODOS', todos);

        todos = todos.filter((todo) => newTaskOne.index !== todo.index);
        localStoragemock.setItem('TODOS', todos);

        expect(localStoragemock.getItem('TODOS').length).toEqual(1);
        expect(localStoragemock.getItem('TODOS')[0]).toEqual(newTaskTwo);
      });
    });
  });
});
