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
      const { data, totalProductCount } = yield response.json();

      const products = data.map(
        ({ images, variants, title, vendor, product_type }) => {
          let totalQuantity = 0;
          let totalPrice = 0;

          variants.forEach(({ inventory_quantity, price }) => {
            totalQuantity += inventory_quantity;
            totalPrice += +price;
          });

          return {
            image: images && images[0],
            totalQuantity,
            NoOfVariants: variants.length,
            totalPrice: totalPrice.toFixed(2),
            variants,
            product_type,
            title,
            vendor,
          };
        }
      );
      yield put({
        type: "STORE_DASHBOARD_DATA",
        payload: { totalProductCount },
      });
      yield put({ type: "STORE_PRODUCTS", payload: products });
    } else {
      yield put({ type: "PRODUCTS_ERROR" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: "PRODUCTS_ERROR" });
  }
}

function* invenoryWorker({ payload }) {
  const token = yield select((state) => state.userInfo.user.IdToken);
  const { createdAtMin, createdAtMax } = payload;
  try {
    const response = yield fetch(
      `${
        API.API_ROOT + API.urls.GET_ORDERS
      }?createdAtMin=${createdAtMin}&createdAtMax=${createdAtMax}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    if (response.ok) {
      const {
        data,
        totalOpenOrderCount,
        totalClosedOrderCount,
        totalOrderCount,
      } = yield response.json();

      yield put({
        type: "STORE_DASHBOARD_DATA",
        payload: {
          totalOpenOrderCount,
          totalClosedOrderCount,
          totalOrderCount,
        },
      });
      yield put({
        type: "STORE_ORDERS",
        payload: data,
      });
    } else {
      yield put({ type: "ORDERS_ERROR" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: "ORDERS_ERROR" });
  }
}
function* dashboardWorker() {
  const token = yield select((state) => state.userInfo.user.IdToken);

  try {
    const response = yield fetch(API.API_ROOT + "/filtered-orders", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (response.ok) {
      const { data } = yield response.json();

      yield put({
        type: "STORE_DASHBOARD_DATA",
        payload: data,
      });
    } else {
      yield put({ type: "DASHBOARD_DATA_ERROR" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: "DASHBOARD_DATA_ERROR" });
  }
}
// Sales Watcher
export default function* salesSaga() {
  yield all([takeLatest("GET_PRODUCTS", salesWorker)]);
  yield all([takeLatest("GET_ORDERS", invenoryWorker)]);
  yield all([takeLatest("GET_DASHBOARD_DATA", dashboardWorker)]);
}
