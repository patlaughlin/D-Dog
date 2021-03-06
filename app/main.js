import './assets/less/main.less';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import dDog from './reducers';
import { createStore } from 'redux';

const store = createStore(dDog);

render(
  <Provider store={store}>
    <div className="container-fluid">
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
