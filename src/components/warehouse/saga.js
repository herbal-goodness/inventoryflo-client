import { put, all, takeLatest, select } from "redux-saga/effects";
import API from "../utils/urls";

function* salesWorker() {
  const token = yield select((state) => state.userInfo.user.IdToken);

  try {
    const response = yield fetch(API.API_ROOT + API.urls.GET_PRODUCTS, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (response.ok) {
      const { data } = yield response.json();
      const products = data.map(
        ({ images, updated_at, variants, title, vendor }) => {
          return {
            image: images && images[0],
            updated_at,
            ...variants[0],
            title,
            vendor,
          };
        }
      );

      yield put({ type: "STORE_PRODUCTS", payload: products });
    } else {
      yield put({ type: "PRODUCTS_ERROR" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: "PRODUCTS_ERROR" });
  }
}

function* invenoryWorker() {
  const token = yield select((state) => state.userInfo.user.IdToken);

  try {
    const response = yield fetch(API.API_ROOT + API.urls.GET_ORDERS, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (response.ok) {
      const result = yield response.json();
      const {
        ordersToBeFulfilled,
        ordersToMonthDate,
        salesToDatePrice,
        cancelledOrders,
        data,
      } = result;

      yield put({
        type: "STORE_ORDERS",
        payload: {
          salesToDatePrice,
          ordersToMonthDate,
          ordersToBeFulfilled,
          cancelledOrders,
          data,
        },
      });
    } else {
      yield put({ type: "ORDERS_ERROR" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: "ORDERS_ERROR" });
  }
}
// Sales Watcher
export default function* salesSaga() {
  yield all([takeLatest("GET_PRODUCTS", salesWorker)]);
  yield all([takeLatest("GET_ORDERS", invenoryWorker)]);
}
