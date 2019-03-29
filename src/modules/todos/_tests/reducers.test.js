import mock from './mocks';
import * as reducers from '../reducers'
import types from '../types';

import utils from '@test-utils';

const defaultTodo = mock.todo('My first todo', 'Todo description');

describe('todos reducers', () => {
  it('Should create a todo and return a list of todos', () => {
    const createTodo = utils.callReducer(
      reducers, 
      {
        type: types.CREATE_TODO, 
        state: { list: []},
        data: utils.action(defaultTodo, types.CREATE_TODO)
      }
    )
      
    const expectedResult = { list: [defaultTodo] };
    expect(createTodo).toEqual(expectedResult);
  });

  it('Should edit a todo and return a list of todos with the edited todo', () => {
    const initialState = { list: [ defaultTodo ]};
    const editedTodo = { ...defaultTodo, title: 'Updated todo'};
    
    const editTodo = utils.callReducer(
      reducers,
      {
        type: types.EDIT_TODO,
        state: initialState,
        data: utils.action(editedTodo, types.EDIT_TODO)
      }
    )

    const expectedResult = { list: [editedTodo] };
    expect(editTodo).toEqual(expectedResult);
  });

});
