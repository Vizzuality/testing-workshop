import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from "./store";
const { store } = configureStore();

import { HelloWorld } from './components';

ReactDOM.render(
  <Provider store={store}>
    <HelloWorld />
  </Provider>,
  document.getElementById('app')
);
