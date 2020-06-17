import { put, all, call, takeLatest } from "redux-saga/effects";
import API from "../utils/urls";
import { loginError, loginSuccess } from "./actions";

// Register Worker
function* loginWorker({ payload }) {
  console.log(payload);
  const response = yield fetch(`${API.API_ROOT + API.urls.SIGN_IN}`, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  try {
    if (response.ok) {
      const { data } = yield response.json();
      if (!data.verified) {
        // push to confirm page.
      }
      yield put(loginSuccess(data));
    } else {
      const data = yield response.json();
      yield put(loginError(data));
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
