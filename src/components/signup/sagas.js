import { put, all, call, takeLatest } from "redux-saga/effects";
import API from "../utils/urls";
import { signupError, signupSuccess } from "./actions";

// Register Worker
function* signupWorker({ payload }) {
  console.log(payload);
  const response = yield fetch(`${API.API_ROOT + API.urls.SIGN_UP}`, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  try {
    if (response.ok) {
      const data = yield response.json();
      yield put(signupSuccess(data.data));
    } else {
      const data = yield response.json();
      yield put(signupError(data));
      yield put({ type: "RESET_STATE" });
    }
  } catch (err) {
    console.log(err);
  }
}

// Register Watcher
export default function* signupSaga() {
  yield all([takeLatest("REQUEST_SIGNUP", signupWorker)]);
}
