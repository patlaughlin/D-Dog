import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import dDog from './reducers';
//import 'todomvc-app-css/index.css';
import { compose, createStore, applyMiddleware } from 'redux';

const store = createStore(dDog);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
