import { put, all, takeLatest } from "redux-saga/effects";
import API from "../utils/urls";
import { loginError, loginSuccess } from "./actions";

// Register Worker
function* loginWorker({ payload }) {
  const { loginInfo, history } = payload;
  const response = yield fetch(`${API.API_ROOT + API.urls.SIGN_IN}`, {
    body: JSON.stringify(loginInfo),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  try {
    if (response.ok) {
      const { data } = yield response.json();
      yield put(loginSuccess(data));
    } else {
      const errData = yield response.json();
      console.log(errData);

      if (errData.data != null) {
        const {
          data: { email, userId },
        } = errData;

        return history.push(API.urls.CONFIRM_CODE, {
          userId: userId,
          email: email,
        });
      }
      yield put(loginError(errData));
      yield put({ type: "RESET_STATE" });
    }
  } catch (err) {
    console.log(err);
  }
}

// Register Watcher
export default function* loginSaga() {
  yield all([takeLatest("REQUEST_LOGIN", loginWorker)]);
}
