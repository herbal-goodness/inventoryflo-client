import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import OrderStatusChart from "../charts/OrderStatusChart";
import InventoryAnalysis from "../charts/InventoryAnalysis";
import DashboardHeader from "./DashboardHeader";
// import TodoSidePane from "./TodoSidePane";
import UserActivities from "./UserActivities";
import Channel from "./Channel";
import RecentActivity from "./RecentActivity";
import TopProductChart from "../charts/TopProductChart";
import GetStartedSidePane from "./GetStartedSidePane";
import SalesAndOrders from "./SalesAndOrders";

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
        <div className="col-sm-12 col-md-9">
          {/* <UserActivities dashboardData={dashboard} /> */}
          <SalesAndOrders />

          <div className="row">
            <div className="col-md-12">
              <TopProductChart data={dashboard.data?.topProducts} />
            </div>

            <div className="col-md-12">
              <InventoryAnalysis data={dashboard.data} />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 mb-5">
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
