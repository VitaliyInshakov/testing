import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Async from './middlewares/async';

const history = createBrowserHistory()
const createStoreWithMiddleware = applyMiddleware(Async)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
      <Route path='/' component={App}/>
    </Router>
  </Provider>,
	document.getElementById('container')
  );