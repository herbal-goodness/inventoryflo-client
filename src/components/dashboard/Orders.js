import React, { useState, useEffect } from "react";
import axios from "axios";
import OrdersChart from "../charts/OrdersChart";
import { Spinner } from "../utils/components";

const Orders = () => {
  const [orderlist, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(
    "https://td8ton72u4.execute-api.us-east-2.amazonaws.com/test/orders"
  );

  const fetchData = async () => {
    try {
      // While waiting for the data to be fetched
      setLoading(true);
      // Make call to API
      const result = await axios.get(url);

      const ordersFound = result.data;

      setOrders(ordersFound.orders);
      setLoading(false);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  // Loading
  const showLoading = () =>
    loading ? (
      <h2>
        <Spinner />
      </h2>
    ) : (
      ""
    );

  return (
    <div>
      {showLoading()}
      <OrdersChart orders={orderlist} />
    </div>
  );
};

export default Orders;
