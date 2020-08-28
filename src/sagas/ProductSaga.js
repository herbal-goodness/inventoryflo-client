import { put, call, takeEvery, all } from "redux-saga/effects"; // The effects returns objects which are passed into and handled by sagaMiddelware
import * as actions from "../actions";
import { actionTypes } from "../actions/actionTypes";
import api from "../services";

// Worker saga
export function* getAllProducts() {
  const products = yield call(api.getProducts);

  yield put(actions.receiveProducts(products.products)); //dispatches product to the store
}
// Watcher saga - listens to actions and invoke the workerSaga
export default function* watchGetProducts() {
  /*
    takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield yield all([takeEvery(actionTypes.GET_ALL_PRODUCTS, getAllProducts)]);
}
