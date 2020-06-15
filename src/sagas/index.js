import { all } from "redux-saga/effects";
import ProductSaga from "./ProductSaga";

export function* mainSaga() {
  yield all([ProductSaga.sagas()]);
}
