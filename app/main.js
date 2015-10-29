import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import dDog from './reducers';
import { createStore } from 'redux';
import './main.css';

const store = createStore(dDog);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
