import { all } from "redux-saga/effects";
import ProductSaga from "./ProductSaga";
import signup from "../components/signup";

export function* mainSaga() {
  yield all([ProductSaga(), signup.sagas()]);
}
