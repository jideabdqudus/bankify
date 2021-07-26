import { DEPOSIT, ERROR, LOADING } from "../constants/types";

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
    console.error(err);
  }
};
