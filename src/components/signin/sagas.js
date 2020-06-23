import { put, all, takeLatest } from "redux-saga/effects";
import Cookies from "js-cookie";
import API from "../utils/urls";
import { makeApiCall } from "../utils/request";
import { loginError, loginSuccess, storeUser } from "./actions";

// Signin Worker
function* loginWorker({ payload }) {
  const { loginInfo, history } = payload;
  /** Make Api call and return the response */
  const response = yield makeApiCall("POST", API.urls.SIGN_IN, loginInfo, 0);

  try {
    if (response.ok) {
      const { data } = yield response.json();
      const expires = data.expiresIn * 1000;
      const inOneHour = new Date(new Date().getTime() + expires);
      Cookies.set("refreshToken", data.refreshToken, { expires: inOneHour });
      yield put(storeUser(data));

      /** Dispatch action for success */
      yield put(loginSuccess());
    } else {
      const errData = yield response.json();
      /** If for example, the user has not been confirmed */
      if (errData.data != null) {
        const {
          data: { email, userId },
        } = errData;

        /** Redirect the user to confirm page */
        return history.push(API.urls.CONFIRM_CODE, {
          userId: userId,
          email: email,
        });
      }
      /** If there's an error, dispatch error action and clear the state for new request */
      yield put(loginError(errData));
      yield put({ type: "RESET_SIGNIN_STATE" });
    }
  } catch (err) {
    console.log(err);
    yield put(loginError(err));
    yield put({ type: "RESET_SIGNIN_STATE" });
  }
}

// Signin Watcher
export default function* loginSaga() {
  yield all([takeLatest("REQUEST_LOGIN", loginWorker)]);
}
