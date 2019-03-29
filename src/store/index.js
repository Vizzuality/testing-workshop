import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { handleModule } from 'vizzuality-redux-tools';

// Modules
import * as todos from '../modules/todos';

const initStore = (initialState = {}) => {
  const reducers = combineReducers({
    todos: handleModule(todos)
  });

  // create store
  const enhancers = composeWithDevTools(applyMiddleware());
  const store = createStore(reducers, initialState, enhancers);

  return { store };
}

export default initStore;