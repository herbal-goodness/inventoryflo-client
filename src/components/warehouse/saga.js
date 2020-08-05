import { put, all, takeLatest, select } from "redux-saga/effects";
import API from "../utils/urls";

function* productsWorker({ payload }) {
  const token = yield select((state) => state.userInfo.user.IdToken);
  const { createdAtMin, createdAtMax } = payload;
  try {
    const response = yield fetch(
      `${
        API.API_ROOT + API.urls.GET_PRODUCTS
      }?createdAtMin=${createdAtMin}&createdAtMax=${createdAtMax}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status > 300) {
      yield put({ type: "PRODUCTS_ERROR" });
    } else if (response.ok) {
      const { data, totalProductCount } = yield response.json();
      const categories = [];

      const products = data.map(
        ({ images, variants, title, vendor, product_type }) => {
          let totalQuantity = 0;
          let totalPrice = 0;

          variants.forEach(({ inventory_quantity, price }) => {
            totalQuantity += inventory_quantity;
            totalPrice += +price;
          });

          if (!categories.includes(product_type)) {
            categories.push(product_type);
          }
          return {
            image: images && images[0],
            totalQuantity: totalQuantity === 0 ? "Out of stock" : totalQuantity,
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
      yield put({ type: "STORE_PRODUCTS", payload: { products, categories } });
    } else {
      yield put({ type: "PRODUCTS_ERROR" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: "PRODUCTS_ERROR" });
  }
}

function* ordersWorker({ payload }) {
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

    if (response.status > 300) {
      yield put({ type: "ORDERS_ERROR" });
    } else if (response.ok) {
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
      function getStatus(financial_status, fulfillment_status, cancelled_at) {
        if (cancelled_at !== null) {
          return "Canceled";
        } else if (
          financial_status === "paid" &&
          fulfillment_status === "fulfilled"
        ) {
          return "Closed";
        } else {
          return "Open";
        }
      }
      const allStatus = [];

      const orders = data.map(
        ({
          closed_at,
          created_at,
          total_price,
          financial_status,
          name,
          processed_at,
          order_number,
          fulfillment_status,
          line_items,
          shipping_lines,
          cancelled_at,
          customer,
        }) => {
          const status = getStatus(
            financial_status,
            fulfillment_status,
            cancelled_at
          );

          if (!allStatus.includes(status)) {
            allStatus.push(status);
          }

          return {
            closed_at,
            created_at: new Date(created_at).toDateString().substr(4).trim(),
            total_price,
            status,
            name,
            processed_at,
            cancelled_at,
            order_number,
            fulfillment_status,
            line_items,
            shipping_lines,
            customer: customer.first_name,
          };
        }
      );
      yield put({
        type: "STORE_ORDERS",
        payload: { orders, allStatus },
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
  yield all([takeLatest("GET_PRODUCTS", productsWorker)]);
  yield all([takeLatest("GET_ORDERS", ordersWorker)]);
  yield all([takeLatest("GET_DASHBOARD_DATA", dashboardWorker)]);
}
