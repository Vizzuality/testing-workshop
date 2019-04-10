import * as actions from './actions';

export default {
  [actions.createTodo]: (state, {
    payload = {
      title: 'Default',
      description: 'description',
      done: false
    }
  }
  ) => ({ ...state, list: [...state.list, payload] }),
  [actions.editTodo]: (state, { payload }) => {
    const { id } = payload;
    const updatedTodos = state.list.map(t => {
      if (t.id === id) {
        return { ...payload };
      }
      return t;
    });
    return { ...state, list: updatedTodos };
  }
};
