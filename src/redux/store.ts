import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import allReducers from './reducers';

const store = createStore(
  allReducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools()
);

export default store;
