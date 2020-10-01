import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
  BrowserRouter,
} from 'react-router-dom';

import { composeWithDevTools } from 'redux-devtools-extension'
//import './index.css';
//import App from './App';
import App from './containers/app/app';

import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
