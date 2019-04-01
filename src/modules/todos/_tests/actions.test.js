import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'

import mock from './mocks';
import * as actions from '../actions'
import types from '../types';

import utils from '@test-utils';

const defaultTodo = mock.todo('My first todo', 'Todo description');

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('todos actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });
  
  it(`Should call action ${types.CREATE_TODO} and return a todo`, () => {
    const store = mockStore({ list: [] })
    store.dispatch(actions.createTodo(defaultTodo))

    const dispatchedActions = store.getActions()

    // We only expect 1 action to be called thats why we pass 1 action in an array
    // here you would pass more actions if you expect more to be called
    const expectedResult = utils.action(
      { ...defaultTodo, done: false }, types.CREATE_TODO
    );
    expect(dispatchedActions).toEqual([expectedResult]);
  });

  it(`Should call action ${types.EDIT_TODO} and return edited todo`, () => {
    const store = mockStore({ list: [] });
    store.dispatch(actions.editTodo(defaultTodo));

    const dispatchedActions = store.getActions();

    const expectedResult = utils.action(
      defaultTodo, types.EDIT_TODO
    );

    expect(dispatchedActions).toEqual([expectedResult]);
  });

});
