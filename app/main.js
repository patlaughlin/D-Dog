import './assets/css/material.min.css';
import './assets/less/main.less';
import './assets/js/material.min.js';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import dDog from './reducers';
import { createStore } from 'redux';

const store = createStore(dDog);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
