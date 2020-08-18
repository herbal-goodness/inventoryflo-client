import React, { useState, useEffect } from "react";
import Orders from "../charts/OrdersChart";
import DashboardSubHeaders from "./DashboardSubHeaders";
import SalesBoxOne from "./SalesBoxOne";
import SalesBoxTwo from "./SalesBoxTwo";
import { useSelector, shallowEqual } from "react-redux";

const SalesAndOrders = () => {
  const [info, setDuration] = useState({ duration: [], type: "" });
  const { salesAndOrders } = useSelector(
    ({ salesAndOrders }) => ({
      salesAndOrders: salesAndOrders.salesAndOrders,
    }),
    shallowEqual
  );

  useEffect(() => {
    setDuration({
      duration: salesAndOrders.filterBy30Days,
      type: "last30days",
    });
  }, []);

  const handleChange = (e) => {
    switch (e.target.value) {
      case "thisWeek":
        setDuration({
          duration: salesAndOrders.filterBythisWeek,
          type: "thisWeek",
        });
        break;
      case "thisMonth":
        setDuration({
          duration: salesAndOrders.filterByMonthDate,
          type: "thisMonth",
        });
        break;
      case "today":
        setDuration({ duration: salesAndOrders.filterByToDay, type: "today" });
        break;
      case "yesterday":
        setDuration({
          duration: salesAndOrders.filterByYesterday,
          type: "yesterday",
        });
        break;
      case "last7days":
        setDuration({
          duration: salesAndOrders.filterByLast7Days,
          type: "last7days",
        });
        break;
      case "last30days":
        setDuration({
          duration: salesAndOrders.filterBy30Days,
          type: "last30days",
        });
        break;

      default:
        setDuration({
          duration: salesAndOrders.filterBy30Days,
          type: "last30days",
        });
        break;
    }
  };
  return (
    <div className="row mx-2 pb-3 mb-4 bg-white">
      <DashboardSubHeaders
        handleChange={handleChange}
        title="Sales and Order"
      />
      <div className="col-md-8 d-size">
        <div className="card-body">
          <Orders salesAndOrders={info.duration} type={info.type} />
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
