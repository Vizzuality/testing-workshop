import { createAction } from 'vizzuality-redux-tools';
import types from './types';

export const createTodo = createAction(types.CREATE_TODO);
export const editTodo = createAction(types.EDIT_TODO);

export default {
  createTodo,
  editTodo
};
