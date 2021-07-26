import {
  DEPOSIT,
  ERROR,
  LOADING,
  WITHDRAW,
} from "../constants/types";

export const deposit = (payload) => (dispatch) => {
  dispatch({ type: LOADING });
  try {
    dispatch({
      type: DEPOSIT,
      payload,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err,
    });
  }
};

export const withdraw = (payload) => (dispatch) => {
  dispatch({ type: LOADING });
  try {
    dispatch({
      type: WITHDRAW,
      payload,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err,
    });
  }
};

export const error = () => (dispatch) => {
  dispatch({ type: ERROR });
};
