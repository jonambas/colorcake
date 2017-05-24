import * as types from './actionTypes';
import colorable from 'colorable';

export function test() {
  return (dispatch, getState) => {
    const { foreground, background } = getState().color;
    const payload = testColors(foreground, background);

    dispatch({
      type: types.TEST,
      payload
    });
  };
}

export function setForeground(payload) {
  return (dispatch) => {
    dispatch({
      type: types.SET_FG,
      payload
    });
    dispatch(test());
  };
}

export function setBackground(payload) {
  return (dispatch) => {
    dispatch({
      type: types.SET_BG,
      payload
    });
    dispatch(test());
  };
}

export function reverse() {
  return (dispatch, getState) => {
    const color = getState().color;
    const [foreground, background] = [color.background, color.foreground];
    dispatch({
      type: types.REVERSE,
      payload: { foreground, background }
    });
    dispatch(test());
  };
}

const testColors = (foreground, background) => {
  const { contrast, accessibility } = colorable({ foreground, background })[0].combinations[0];
  return {
    contrast,
    accessibility
  };
}
