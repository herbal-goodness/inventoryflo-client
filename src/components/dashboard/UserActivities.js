import React from "react";
import { Spinner } from "../utils/components";

const UserActivities = ({ dashboardData }) => {
  const { data, loading, error } = dashboardData;

  return loading ? (
    <Spinner />
  ) : (
    <div className="user-activities-wrapper mx-md-auto">
      <h3 className="p-4"> Month to date performance</h3>
      <div className="d-flex flex-row flex-wrap justify-content-between align-items-center user-activities mb-4 py-3">
        <div className="col-md-2 px-3 flex-fill  flex-md-shrink-1">
          <div className="content">
            ${(data && data.salesToDatePrice) || "0" || (error && "0")}
          </div>
          <p className="py-auto text-center">Sales Month to date</p>
        </div>
        <div className="col-md-2 px-3 flex-fill  flex-md-shrink-1">
          <div className="content">
            {(data && data.ordersToMonthDate) || "0" || (error && "0")}
          </div>
          <p className="py-auto text-center">Orders month to date</p>
        </div>
        <div className="col-md-2 px-3 flex-fill flex-md-shrink-1">
          <div className="content">
            {(data && data.quantitySold) || "0" || (error && "0")}
          </div>
          <p className="py-auto text-center">Quantity sold</p>
        </div>
        <div className="col-md-2 px-3 flex-fill flex-md-shrink-1">
          <div className="content">
            {(data && data.cancelledOrders) || "0" || (error && "0")}{" "}
          </div>
          <p className="py-auto text-center">Cancelled orders</p>
        </div>
        <div className="col-md-2 px-3 flex-fill flex-md-shrink-1">
          <div className="content">
            {(data && data.ordersToBeFulfilled) || (error && "0")}{" "}
          </div>
          <p className="py-auto text-center">Orders to be fulfilled</p>
        </div>
      </div>
    </div>
  );
};

export default UserActivities;
