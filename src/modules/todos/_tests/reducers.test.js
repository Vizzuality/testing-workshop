import mock from './mocks';
import { reducers, actions, initialState } from 'modules/todos'
import types from 'modules/todos/types';
import { handleModule } from 'vizzuality-redux-tools';

const reducer = handleModule({ reducers, initialState });

const defaultTodo = mock.todo('My first todo', 'Todo description');

describe('todos reducers', () => {
  it(`Should call reducer for action: ${types.CREATE_TODO} and return a list of todos`, () => {
    const action = actions.createTodo(defaultTodo);
    const newState = reducer(initialState, action);
    const expectedResult = { ...initialState, list: [defaultTodo] };

    expect(newState).toEqual(expectedResult);
  });

  it(`Should call reducer for action: ${types.EDIT_TODO} and return a list of updated todos`, () => {
    const state = { ...initialState, list: [defaultTodo]};
    const editedTodo = { ...defaultTodo, title: 'Updated todo'};

    const action = actions.editTodo(editedTodo);
    const newState = reducer(state, action);

    const expectedResult = { ...state, list: [editedTodo] };
    expect(newState).toEqual(expectedResult);
  });

});
