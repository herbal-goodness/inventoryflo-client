import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import OrderStatusChart from "../charts/OrderStatusChart";
import Orders from "../charts/OrdersChart";
import DashboardHeader from "./DashboardHeader";
import TodoSidePane from "./TodoSidePane";
import UserActivities from "./UserActivities";
import Channel from "./Channel";
import RecentActivity from "./RecentActivity";
import TotalListingsProductChart from "../charts/TotalListingsProductChart";
import TopProductChart from "../charts/TopProductChart";

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
    <div className="container-fluid mx-auto main dashboard">
      <DashboardHeader />
      <div className="row">
        <div className="col-md-5 col-lg-3">
          <TodoSidePane />
          <Channel />
          <RecentActivity />
        </div>

        <div className="col-md-7 col-lg-9">
          <UserActivities dashboardData={dashboard} />
          <Orders orders={orders} />
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
      </div>
    </div>
  );
};

export default Dashboard;
