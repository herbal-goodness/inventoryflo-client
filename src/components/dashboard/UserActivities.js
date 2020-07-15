import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Spinner } from "../utils/components";

const UserActivities = ({ data }) => {
  const dispatch = useDispatch();
  const {
    isLoading,
    salesToDatePrice,
    ordersToMonthDate,
    cancelledOrders,
    ordersToBeFulfilled,
    isSuccessful,
  } = useSelector(
    ({ orders }) => ({
      isSuccessful: orders.successful,
      salesToDatePrice: orders.userOrders?.salesToDatePrice,
      ordersToMonthDate: orders.userOrders?.ordersToMonthDate,
      cancelledOrders: orders.userOrders?.cancelledOrders,
      ordersToBeFulfilled: orders.userOrders?.ordersToBeFulfilled,
      isLoading: orders.loading,
    }),
    shallowEqual
  );

  useEffect(() => {
    setTimeout(() => {
      if (isLoading) {
        dispatch({ type: "ORDERS_ERROR" });
      }
    }, 10000);
  }, [isLoading]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="d-flex flex-row justify-content-between align-items-center user-activities mb-4">
      <div className="col-md-3 p-3">
        <div className="content">
          $ {(isSuccessful && salesToDatePrice) || "0"}
        </div>
        <p className="pt-2 text-center">Sales Month to date</p>
      </div>
      <div className="col-md-3 p-3">
        <div className="content">
          {(isSuccessful && ordersToMonthDate) || "0"}
        </div>
        <p className="pt-2 text-center">Orders month to date</p>
      </div>
      <div className="col-md-3 p-3">
        <div className="content">
          {(isSuccessful && cancelledOrders) || "0"}
        </div>
        <p className="pt-2 text-center">Cancelled orders</p>
      </div>
      <div className="col-md-3 p-3">
        <div className="content">
          {(isSuccessful && ordersToBeFulfilled) || "0"}
        </div>
        <p className="pt-2 text-center">Orders to be fulfilled</p>
      </div>
    </div>
  );
};

export default UserActivities;
