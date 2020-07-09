import { put, all, takeLatest } from "redux-saga/effects";
import API from "../utils/urls";
import { makeApiCall } from "../utils/request";

function* salesWorker() {
  const response = yield makeApiCall("GET", API.urls.GET_PRODUCTS);
  try {
    if (response.ok) {
      const { data } = yield response.json();
      // console.log(data);
      yield put({ type: "STORE_PRODUCTS", payload: data });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: "PRODUCTS_ERROR" });
  }
}

// Sales Watcher
export default function* salesSaga() {
  yield all([takeLatest("GET_PRODUCTS", salesWorker)]);
}
