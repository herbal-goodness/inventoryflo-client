import React, { useState, useEffect } from "react";
import Orders from "../charts/OrdersChart";
import DashboardSubHeaders from "./DashboardSubHeaders";
import SalesBoxOne from "./SalesBoxOne";
import SalesBoxTwo from "./SalesBoxTwo";
import { useSelector, shallowEqual } from "react-redux";

const SalesAndOrders = () => {
  const [info, setDuration] = useState({ duration: [], type: "" });
  const [empty, setEmpty] = useState(false);
  const [
    { ordersRefunds, ordersOpens, ordersFulFilleds },
    setOrderStatus,
  ] = useState({});
  const {
    salesAndOrders,
    loadingSalesAndOrders,
    successfulSalesAndOrders,
    errorSalesAndOrders,
  } = useSelector(
    ({ salesAndOrders }) => ({
      salesAndOrders: salesAndOrders.salesAndOrders,
      loadingSalesAndOrders: salesAndOrders.loading,
      errorSalesAndOrders: salesAndOrders.error,
      successfulSalesAndOrders: salesAndOrders.successful,
    }),
    shallowEqual
  );

  const isNegative = (value) => {
    const ex = new RegExp("^-");
    return ex.test(value);
  };

  useEffect(() => {
    if (!loadingSalesAndOrders && successfulSalesAndOrders) {
      const {
        ordersRefund,
        ordersOpen,
        ordersFulFilled,
      } = salesAndOrders.metaData;

      setDuration({
        duration: salesAndOrders.filterBy30Days,
        metaData: {
          totalPrice: getTotalPrice(salesAndOrders.filterBy30Days),
          refundedChange: ordersRefund.last30DaysRefundedChange,
          refunded: ordersRefund.last30DaysRefunded,
          openChange: ordersOpen.last30DaysOpenChange,
          fulFilled: ordersFulFilled.last30DaysFulFilled,
          open: ordersOpen.last30DaysOpen,
          fulFillChange: ordersFulFilled.last30DaysFulFillChange,
        },
        type: "last30days",
      });

      setOrderStatus({
        ordersRefunds: ordersRefund,
        ordersOpens: ordersOpen,
        ordersFulFilleds: ordersFulFilled,
      });
    }
  }, [salesAndOrders]);

  const handleChannelChange = (event) => {
    if (event.target.value !== "shopify") {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };

  const handleChange = (e) => {
    switch (e.target.value) {
      case "thisWeek":
        setDuration({
          duration: salesAndOrders.filterBythisWeek,
          metaData: {
            totalPrice: getTotalPrice(salesAndOrders.filterBythisWeek),
            refundedChange: ordersRefunds.thisweekRefundedChange,
            refunded: ordersRefunds.thisweekRefunded,
            fulFillChange: ordersFulFilleds.thisweekFulFillChange,
            fulFilled: ordersFulFilleds.thisweekFulFilled,
            open: ordersOpens.thisweekOpen,
            openChange: ordersOpens.thisweekOpenChange,
          },
          type: "thisWeek",
        });
        break;
      case "thisMonth":
        setDuration({
          duration: salesAndOrders.filterByMonthDate,
          metaData: {
            totalPrice: getTotalPrice(salesAndOrders.filterByMonthDate),
            refundedChange: ordersRefunds.monthToDateRefundedChange,
            refunded: ordersRefunds.monthToDateRefunded,
            fulFilled: ordersFulFilleds.monthToDateFulFilled,
            fulFillChange: ordersFulFilleds.monthToDateFulFillChange,
            open: ordersOpens.monthToDateOpen,
            openChange: ordersOpens.monthToDateOpenChange,
          },
          type: "thisMonth",
        });
        break;
      case "today":
        setDuration({
          duration: salesAndOrders.filterByToDay,
          metaData: {
            totalPrice: getTotalPrice(salesAndOrders.filterByToDay),
            refundedChange: ordersRefunds.todayRefundedChange,
            refunded: ordersRefunds.todayRefunded,
            open: ordersOpens.todayOpen,
            openChange: ordersOpens.todayOpenChange,
            fulFillChange: ordersFulFilleds.todayFulFillChange,
            fulFilled: ordersFulFilleds.todayFulFilled,
          },
          type: "today",
        });
        break;
      case "yesterday":
        setDuration({
          duration: salesAndOrders.filterByYesterday,
          metaData: {
            totalPrice: getTotalPrice(salesAndOrders.filterByYesterday),
            refundedChange: ordersRefunds.ydayRefundedChange,
            refunded: ordersRefunds.ydayRefunded,
            openChange: ordersOpens.ydayOpenChange,
            open: ordersOpens.ydayOpen,
            fulFillChange: ordersFulFilleds.ydayFulFillChange,
            fulFilled: ordersFulFilleds.ydayFulFilled,
          },
          type: "yesterday",
        });
        break;
      case "last7days":
        setDuration({
          duration: salesAndOrders.filterByLast7Days,
          metaData: {
            totalPrice: getTotalPrice(salesAndOrders.filterByLast7Days),
            refunded: ordersRefunds.last7DaysRefunded,
            refundedChange: ordersRefunds.last7DaysRefundedChange,
            openChange: ordersOpens.last7DaysOpenChange,
            open: ordersOpens.last7DaysOpen,
            fulFillChange: ordersFulFilleds.last7DaysFulFillChange,
            fulFilled: ordersFulFilleds.last7DaysFulFilled,
          },
          type: "last7days",
        });
        break;
      case "last30days":
        setDuration({
          duration: salesAndOrders.filterBy30Days,
          metaData: {
            totalPrice: getTotalPrice(salesAndOrders.filterBy30Days),
            refundedChange: ordersRefunds.last30DaysRefundedChange,
            refunded: ordersRefunds.last30DaysRefunded,
            openChange: ordersOpens.last30DaysOpenChange,
            fulFilled: ordersFulFilleds.last30DaysFulFilled,
            open: ordersOpens.last30DaysOpen,
            fulFillChange: ordersFulFilleds.last30DaysFulFillChange,
          },
          type: "last30days",
        });
        break;

      default:
        setDuration({
          duration: salesAndOrders.filterBy30Days,
          metaData: {
            totalPrice: getTotalPrice(salesAndOrders.filterBy30Days),
            refundedChange: ordersRefunds.last30DaysRefundedChange,
            refunded: ordersRefunds.last30DaysRefunded,
            openChange: ordersOpens.last30DaysOpenChange,
            fulFilled: ordersFulFilleds.last30DaysFulFilled,
            open: ordersOpens.last30DaysOpen,
            fulFillChange: ordersFulFilleds.last30DaysFulFillChange,
          },
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
          <Orders
            totalPrice={empty ? "XX" : info.metaData?.totalPrice}
            salesAndOrders={empty ? [] : info.duration}
            type={info.type}
          />
        </div>
      </div>

      <div className="col-md-4 d-size">
        <div className="row">
          <div className="col-12">
            <div className="box-1 mt-3 py-3 text-center">
              <span className="total-order-1 py-2">Total Orders </span>
              <span className="total-order-3 text-green ml-4">
                {empty ? "XX" : info.duration[0]?.orderCount}
              </span>
              <span className="total-order-1">
                <i
                  className={
                    isNegative(info.duration[0]?.changeInOrder)
                      ? "fa fa-arrow-down text-red fa-lg"
                      : "fa fa-arrow-up text-green fa-lg"
                  }
                ></i>
              </span>
              <sub>{empty ? "XX" : info.duration[0]?.changeInOrder}</sub>
            </div>
          </div>

          <SalesBoxOne
            title="Orders Fulfilled"
            value={empty ? "XX" : info.metaData?.fulFilled}
            isNegative={isNegative}
            changeRate={empty ? "XX" : info.metaData?.fulFillChange}
          />

          <SalesBoxOne
            title="Open Orders"
            value={empty ? "XX" : info.metaData?.open}
            isNegative={isNegative}
            changeRate={empty ? "XX" : info.metaData?.openChange}
          />

          <SalesBoxTwo
            isNegative={isNegative}
            title="Cancelled Orders"
            value="XX"
            centage="XX"
          />
          <SalesBoxTwo
            title="Refunds Provided"
            isNegative={isNegative}
            value={empty ? "XX" : info.metaData?.refunded}
            changeRate={empty ? "XX" : info.metaData?.refundedChange}
          />
        </div>
      </div>
    </div>
  );
};

function getTotalPrice(list) {
  const total = list.reduce((a, b) => {
    return {
      total_price: (+a.total_price || 0) + +b.total_price,
    };
  });
  return total.total_price;
}

export default SalesAndOrders;
