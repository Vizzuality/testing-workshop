import mock from './mocks';
import * as reducers from '../reducers'
import types from '../types';

import utils from '../../../test-utils';

const defaultTodo = mock.todo('My first todo', 'Todo description');

describe('todos reducers', () => {
  it('should create a todo and return a list of todos', () => {
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
});
