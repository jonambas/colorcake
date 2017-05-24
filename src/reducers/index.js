import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

function color(state = {}, action) {
  switch (action.type) {

    case types.SET_FG :
      return {
        ...state,
        foreground: action.payload
       };

    case types.SET_BG :
      return {
        ...state,
        background: action.payload
      };

    case types.REVERSE :
      return {
        ...state,
        foreground: action.payload.foreground,
        background: action.payload.background
      };

    case types.TEST :
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

const reducers = {
  color,
};

export default combineReducers(reducers);
