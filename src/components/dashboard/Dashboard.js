import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import SalesChart from "../charts/SalesChart";
import Orders from "./Orders";
import DashboardHeader from "./DashboardHeader";
import TodoSidePane from "./TodoSidePane";
import UserActivities from "./UserActivities";
import Channel from "./Channel";
import RecentActivity from "./RecentActivity";
import TotalListingsProductChart from "../charts/TotalListingsProductChart";
import TopProductChart from "../charts/TopProductChart";
import API from "../utils/urls";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [dashBoardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setDataError] = useState(false);

  const {
    token,
    orders,
    sales,
    hasShopifyUrl,
    hasShopifySecret,
    isSuccessful,
  } = useSelector(
    ({ sales, userInfo, orders }) => ({
      token: userInfo.user.IdToken,
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
      dispatch({
        type: "GET_ORDERS",
        payload: {},
      });
  }, []);

  useEffect(() => {
    const getDashBoardData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(API.API_ROOT + "/filtered-orders", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        if (res.ok) {
          const { data } = await res.json();
          setDashboardData({ ...data });
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setDataError(true);
        }
      } catch (error) {
        setIsLoading(false);
        setDataError(true);
        console.log(error);
      }
    };
    getDashBoardData();
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
          <UserActivities data={{ dashBoardData, isLoading, error }} />
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
