import actionTypes from "./actionTypes";

export function loginRequest(payload) {
  return {
    type: actionTypes.REQUEST_LOGIN,
    payload,
  };
}

export function loginSuccess() {
  return {
    type: actionTypes.LOGIN_REQUEST_SUCCESS,
  };
}
export function storeUser(payload) {
  return {
    type: actionTypes.STORE_USER,
    payload,
  };
}

export function loginError(error) {
  return {
    type: actionTypes.LOGIN_ERROR,
    error,
  };
}
