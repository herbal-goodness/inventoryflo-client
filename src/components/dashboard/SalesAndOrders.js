import React from "react";
import Orders from "../charts/OrdersChart";
import DashboardSubHeaders from "./DashboardSubHeaders";
import SalesBoxOne from "./SalesBoxOne";
import SalesBoxTwo from "./SalesBoxTwo";
import { useSelector, shallowEqual } from "react-redux";

const SalesAndOrders = () => {
  const { orders } = useSelector(
    ({ orders }) => ({
      orders: orders.userOrders,
    }),
    shallowEqual
  );

  return (
    <div className="row mx-2 pb-3 mb-4 bg-white">
      <DashboardSubHeaders title="Sales and Order" />
      <div className="col-md-8 d-size">
        <div className="card-body">
          <Orders orders={orders} />
        </div>
      </div>

      <div className="col-md-4 d-size">
        <div className="row">
          <div className="col-12">
            <div className="box-1 mt-3 py-3 text-center">
              <span className="total-order-1 py-2">Total Orders </span>
              <span className="total-order-3 text-green ml-4">60 </span>
              <span className="total-order-1">
                <i className="fa fa-arrow-up text-green fa-lg"></i>
              </span>
              <sub>2.5%</sub>
            </div>
          </div>

          <SalesBoxOne title="Orders Fulfilled" value="32" centage="2.5" />

          <SalesBoxOne title="Open Orders" value="14" centage="2.5" />

          <SalesBoxTwo title="Cancelled Orders" value="10" centage="1" />

          <SalesBoxTwo title="Refunds Provided" value="109" centage="1" />
        </div>
      </div>
    </div>
  );
};

export default SalesAndOrders;
