import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'

import mock from './mocks';
import * as actions from '../actions'
import types from '../types';

import utils from '../../../test-utils';

const defaultTodo = mock.todo('My first todo', 'Todo description');

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('todos actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });
  it('should create a todo and done should default to false', () => {
    const store = mockStore({ list: [] })

    const expectedResult = utils.action(
      { ...defaultTodo, done: false }, types.CREATE_TODO
    );

    store.dispatch(actions.createTodo(defaultTodo))

    const dispatchedActions = store.getActions()

    // We only expect 1 action to be called thats why we pass 1 action in an array
    // here you would pass more actions if you expect more to be called
    expect(dispatchedActions).toEqual([expectedResult]);
  });
});
