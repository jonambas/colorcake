/* eslint-disable no-mixed-operators */

import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';
import initialState from './initialState';
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
