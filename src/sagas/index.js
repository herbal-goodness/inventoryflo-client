import { all } from "redux-saga/effects";
import ProductSaga from "./ProductSaga";
import signup from "../components/signup";
import login from "../components/signin";
import sales from "../components/warehouse";

export function* mainSaga() {
  yield all([ProductSaga(), signup.sagas(), login.sagas(), sales.sagas()]);
}
