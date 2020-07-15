import React, { useEffect } from "react";

import SalesChart from "../charts/SalesChart";
import Orders from "./Orders";
import DashboardHeader from "./DashboardHeader";
import TodoSidePane from "./TodoSidePane";
import UserActivities from "./UserActivities";
import Channel from "./Channel";
import RecentActivity from "./RecentActivity";
import TotalListingsProductChart from "../charts/TotalListingsProductChart";
import TopProductChart from "../charts/TopProductChart";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    orders,
    sales,
    hasShopifyUrl,
    hasShopifySecret,
    isSuccessful,
  } = useSelector(
    ({ sales, userInfo, orders }) => ({
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
      sales === null &&
      dispatch({ type: "GET_PRODUCTS" }) &&
      orders === null &&
      dispatch({ type: "GET_ORDERS" });
  }, []);

  return (
    <div className="container-fluid mx-auto main dashboard">
      <DashboardHeader />

      <div className="row">
        <div className="col-md-3">
          <TodoSidePane />
          <Channel />
          <RecentActivity />
        </div>

        <div className="col-md-9">
          <UserActivities />
          <SalesChart />
          <Orders />
          <TotalListingsProductChart />
          <TopProductChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
