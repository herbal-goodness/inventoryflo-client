import actionTypes from "./actionTypes";

export function signupRequest(payload) {
  return {
    type: actionTypes.REQUEST_SIGNUP,
    payload,
  };
}

export function signupSuccess(payload) {
  return {
    type: actionTypes.REQUEST_SUCCESS,
    payload,
  };
}

export function signupError(error) {
  return {
    type: actionTypes.SIGNUP_ERROR,
    error,
  };
}
