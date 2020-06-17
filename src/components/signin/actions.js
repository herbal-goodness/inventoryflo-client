import actionTypes from "./actionTypes";

export function loginRequest(payload) {
  return {
    type: actionTypes.REQUEST_LOGIN,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: actionTypes.REQUEST_SUCCESS,
    payload,
  };
}

export function loginError(error) {
  return {
    type: actionTypes.LOGIN_ERROR,
    error,
  };
}
