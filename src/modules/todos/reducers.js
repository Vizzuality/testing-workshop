import * as actions from './actions';

export default {
  [actions.createTodo]: (state, { 
    payload = { 
      title: 'Default', 
      description: 'description', 
      done: false 
    } }) => ({ ...state, list: [...state.list, payload] })
};
