//import createTodo from '../src/onclickadd.js';
import { localStoragemock } from '../__mocks__/mockStorage1';
import clearAll from '../src/clearallcompleted_prototype';

describe ('Clear completed Tasks and update localStorage',() => {
    test ('Add 3 tasks and remove 2 tasks', () => {
        localStoragemock.setItem('TODOS',[]);
        let todos = [];
        const task1 = { description: 'task 1', completed: true, index: 1 };
        const task2 = { description: 'task 2', completed: false, index: 2 };
        const task3 = { description: 'task 3', completed: true, index: 3 };
        todos.push(task1);
        todos.push(task2);
        todos.push(task3);
        localStoragemock.setItem('TODOS', todos);
        todos = clearAll(todos);
        localStoragemock.setItem('TODOS', todos);
        expect(localStoragemock.getItem('TODOS').length).toEqual(1);
        expect(localStoragemock.getItem('TODOS')[0].description).toEqual('task 2');
        expect(localStoragemock.getItem('TODOS')[0].index).toEqual(1);
    })
} );