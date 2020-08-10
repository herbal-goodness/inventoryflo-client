import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import OrderStatusChart from "../charts/OrderStatusChart";
import Orders from "../charts/OrdersChart";
import DashboardHeader from "./DashboardHeader";
// import TodoSidePane from "./TodoSidePane";
import UserActivities from "./UserActivities";
import Channel from "./Channel";
import RecentActivity from "./RecentActivity";
import TotalListingsProductChart from "../charts/TotalListingsProductChart";
import TopProductChart from "../charts/TopProductChart";
import SalesAndOrdersParams from "./SalesAndOrdersParams";
import DashboardSubHeaders from "./DashboardSubHeaders";
import SalesAndOrdersParamTwo from "./SalesAndOrdersParamTwo";
import SalesAndOrdersParamThree from "./SalesAndOrdersParamThree";
import GetStartedSidePane from "./GetStartedSidePane";

const Dashboard = () => {
  const dispatch = useDispatch();

  const {
    dashboard,
    orders,
    sales,
    hasShopifyUrl,
    hasShopifySecret,
    isSuccessful,
  } = useSelector(
    ({ sales, userInfo, orders, dashboard }) => ({
      dashboard,
      hasShopifyUrl:
        userInfo.user.shopifyDomain && userInfo.user.shopifyDomain.length > 3,
      hasShopifySecret:
        userInfo.user.shopifySecret && userInfo.user.shopifySecret.length > 3,
      isSuccessful: userInfo.successful,
      sales: sales.products,
      orders: orders.userOrders,
      productsLoaded: sales.successful,
    }),
    shallowEqual
  );

  useEffect(() => {
    hasShopifyUrl &&
      hasShopifySecret &&
      isSuccessful &&
      sales.length < 1 &&
      dispatch({ type: "GET_PRODUCTS", payload: {} });

    hasShopifyUrl &&
      hasShopifySecret &&
      isSuccessful &&
      orders.length < 1 &&
      dispatch({
        type: "GET_ORDERS",
        payload: {},
      });
  }, []);

  useEffect(() => {
    hasShopifyUrl &&
      hasShopifySecret &&
      isSuccessful &&
      dashboard.data === null &&
      dispatch({ type: "GET_DASHBOARD_DATA" });
  }, []);

  return (
    <div className="container-fluid mx-auto dashboard">
      <DashboardHeader />
      <div className="row">
        <div className="col-md-7 col-lg-9">
          {/* <UserActivities dashboardData={dashboard} /> */}
          <div className="chart-container py-4 px-3 mb-4">
            <DashboardSubHeaders title="Sales and Orders" />
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <Orders orders={orders} />
              </div>
              <div className="col-md-12 col-lg-4">
                <SalesAndOrdersParams />
                <div className="d-flex flex-wrap justify-content-between mb-2 justify-items-center">
                  <SalesAndOrdersParamTwo
                    title="orders fulfilled"
                    figure="32"
                    percentage="12%"
                  />
                  <SalesAndOrdersParamTwo
                    title="open orders"
                    figure="14"
                    percentage="2.5%"
                  />
                </div>
                <div className="d-flex flex-wrap justify-content-between mb-2 justify-items-center">
                  <SalesAndOrdersParamThree
                    title="cancelled orders"
                    figure="10"
                    percentage="1%"
                  />
                  <SalesAndOrdersParamThree
                    title="refunds provided"
                    figure="$104"
                    percentage="1%"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-6">
              <TotalListingsProductChart data={dashboard.data} />
            </div>
            <div className="col-md-12 col-lg-6">
              <OrderStatusChart data={dashboard.data} />
            </div>
          </div>

          <TopProductChart data={dashboard.data?.topProducts} />
        </div>
        <div className="col-md-5 col-lg-3">
          {/* <TodoSidePane /> */}
          <GetStartedSidePane />
          {/* <Channel /> */}
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
