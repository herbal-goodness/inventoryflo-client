import { put, all, takeLatest, select } from "redux-saga/effects";
import API from "../utils/urls";
import {
  dayB4yesterday,
  yesterday,
  lastOther7Days,
  last7Days,
  thisWeek,
  currentDay,
  beginningOfmonth,
} from "./constants";
import { getTotalPrice } from "../dashboard/functions";

/**
 * Gets change in orders
 * @param {*} previousOrder
 * @param {*} currentOrder
 * @returns {string} result of the change in percent
 */
function getChangeInSales(previousOrderCount, currentOrderCount) {
  if (previousOrderCount === 0) {
    return 0;
  }
  return `${Math.round(
    ((previousOrderCount - currentOrderCount) / previousOrderCount) * 100
  )}%`;
}

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
        ({ images, created_at, variants, title, vendor, product_type }) => {
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
            created_at,
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

      //START TODAY
      const filterByToDay = products.filter(
        ({ created_at }) => new Date(created_at) >= new Date(currentDay)
      );
      //START YESTERDAY AND END TODAY
      const filterByYesterday = products.filter(
        ({ created_at }) => new Date(created_at) >= new Date(yesterday)
      );
      // START LAST 7 DAYS AND END TODAY
      const filterByLast7Days = products.filter(
        ({ created_at }) => new Date(created_at) >= new Date(last7Days)
      );

      // START BEGIINING OF THIS WEEK AND END TODAY
      const filterBythisWeek = products.filter(
        ({ created_at }) => new Date(created_at) >= new Date(thisWeek)
      );
      //START BEGINING OF THE MONTH AND END TODAY
      const filterByMonthDate = products.filter(
        ({ created_at }) => new Date(created_at) >= new Date(beginningOfmonth)
      );

      yield put({
        type: "STORE_DASHBOARD_DATA",
        payload: { totalProductCount },
      });
      yield put({
        type: "STORE_PRODUCTS",
        payload: {
          products,
          categories,
          filteredProducts: {
            filterByToDay,
            filterByYesterday,
            filterByLast7Days,
            filterBythisWeek,
            filterByMonthDate,
            filterByLast30Days: products,
          },
        },
      });
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
          id,
          closed_at,
          created_at,
          total_price,
          financial_status,
          name,
          processed_at,
          order_number,
          fulfillment_status,
          line_items,
          shipping_address,
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
            id,
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
            customer_lastName: customer.last_name,
            customer_city: shipping_address.city,
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

// function* dashboardWorker() {
//   const token = yield select((state) => state.userInfo.user.IdToken);

//   try {
//     const response = yield fetch(API.API_ROOT + "/filtered-orders", {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });

//     if (response.ok) {
//       const { data } = yield response.json();

//       yield put({
//         type: "STORE_DASHBOARD_DATA",
//         payload: data,
//       });
//     } else {
//       yield put({ type: "DASHBOARD_DATA_ERROR" });
//     }
//   } catch (error) {
//     console.log(error);
//     yield put({ type: "DASHBOARD_DATA_ERROR" });
//   }
// }
function* salesAndOrdersWorker() {
  const token = yield select((state) => state.userInfo.user.IdToken);

  try {
    const response = yield fetch(API.API_ROOT + "/order-by-dates", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (response.ok) {
      const data = yield response.json();

      //START A DAY BEFORE YESTERDAY AND END YESTERDAY
      const filterByB4Yesterday = data.filterBythisWeek.filter(
        ({ created_at }) =>
          new Date(created_at) >= new Date(dayB4yesterday) &&
          new Date(created_at) < new Date(yesterday)
      );
      //START AT LAST 14 DAYS AND END LAST 7 DAYS
      const filterByOthLast7Days = data.filterByMonthDate.filter(
        ({ created_at }) =>
          new Date(created_at) >= new Date(lastOther7Days) &&
          new Date(created_at) < new Date(last7Days)
      );

      // START LAST 7 DAYS AND END BEGINING OF THIS WEEK
      const filterByLasWeek = data.filterByMonthDate.filter(
        ({ created_at }) =>
          new Date(created_at) >= new Date(last7Days) &&
          new Date(created_at) < new Date(thisWeek)
      );

      const todaySalesChange = getChangeInSales(
        getTotalPrice(data.filterByYesterday),
        getTotalPrice(data.filterByToDay)
      );
      const yesterdaySalesChange = getChangeInSales(
        getTotalPrice(filterByB4Yesterday),
        getTotalPrice(data.filterByYesterday)
      );
      const thisweekSalesChange = getChangeInSales(
        getTotalPrice(filterByLasWeek),
        getTotalPrice(data.filterBythisWeek)
      );
      const last7DaySalesChange = getChangeInSales(
        getTotalPrice(filterByOthLast7Days),
        getTotalPrice(data.filterByLast7Days)
      );

      data.filterByYesterday[0]["salesChange"] = yesterdaySalesChange;
      data.filterByToDay[0]["salesChange"] = todaySalesChange;
      data.filterBythisWeek[0]["salesChange"] = thisweekSalesChange;
      data.filterByLast7Days[0]["salesChange"] = last7DaySalesChange;

      yield put({
        type: "STORE_SALES_AND_ORDER",
        payload: data,
      });
    } else {
      yield put({ type: "SALES_AND_ORDER_ERROR" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: "SALES_AND_ORDER_ERROR" });
  }
}
// Sales Watcher
export default function* salesSaga() {
  yield all([takeLatest("GET_PRODUCTS", productsWorker)]);
  yield all([takeLatest("GET_ORDERS", ordersWorker)]);
  // yield all([takeLatest("GET_DASHBOARD_DATA", dashboardWorker)]);
  yield all([takeLatest("GET_SALES_AND_ORDER", salesAndOrdersWorker)]);
}
