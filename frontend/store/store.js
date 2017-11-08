import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-logger';
import logger from 'redux-thunk';
import RootReducer from '../reducers/root_reducer'

const middleware = window.location.href.includes('data:text/html,chromewebdata') ? [thunk, logger] : [thunk];

const configureStore = (preloadedState = {}) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(...middleware));
};

export default configureStore;
