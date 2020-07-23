import React from "react";
import { Spinner } from "../utils/components";

const UserActivities = ({ data }) => {
  const { dashBoardData, isLoading, error } = data;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="user-activities-wrapper mx-md-auto">
      <h3 className="p-4"> Month to date performance</h3>
      <div className="d-flex flex-row flex-wrap justify-content-between align-items-center user-activities mb-4 py-3">
        <div className="col-md-2 px-3 flex-fill  flex-md-shrink-1">
          <div className="content">
            $
            {(dashBoardData && dashBoardData.salesToDatePrice) ||
              "0" ||
              (error && "0")}{" "}
          </div>
          <p className="py-auto text-center">Sales Month to date</p>
        </div>
        <div className="col-md-2 px-3 flex-fill  flex-md-shrink-1">
          <div className="content">
            {(dashBoardData && dashBoardData.ordersToMonthDate) ||
              "0" ||
              (error && "0")}{" "}
          </div>
          <p className="py-auto text-center">Orders month to date</p>
        </div>
        <div className="col-md-2 px-3 flex-fill flex-md-shrink-1">
          <div className="content">
            {(dashBoardData && dashBoardData.quantitySold) ||
              "0" ||
              (error && "0")}{" "}
          </div>
          <p className="py-auto text-center">Quantity sold</p>
        </div>
        <div className="col-md-2 px-3 flex-fill flex-md-shrink-1">
          <div className="content">
            {(dashBoardData && dashBoardData.cancelledOrders) ||
              "0" ||
              (error && "0")}{" "}
          </div>
          <p className="py-auto text-center">Cancelled orders</p>
        </div>
        <div className="col-md-2 px-3 flex-fill flex-md-shrink-1">
          <div className="content">
            {(dashBoardData && dashBoardData.ordersToBeFulfilled) ||
              (error && "0")}{" "}
          </div>
          <p className="py-auto text-center">Orders to be fulfilled</p>
        </div>
      </div>
    </div>
  );
};

export default UserActivities;
