import React, { useEffect, useState } from "react";

const SalesDriversParams = ({ title, isEmpty, data }) => {
  const [fig, setUniqueCustomer] = useState();

  useEffect(() => {
    const uniqueCustomers = [];
    if (data !== undefined) {
      data.forEach(({ customer, customer_lastName }) => {
        !uniqueCustomers.includes(`${customer}${customer_lastName}`) &&
          uniqueCustomers.push(`${customer}${customer_lastName}`);
      });
    }

    setUniqueCustomer(uniqueCustomers.length);
  }, [isEmpty, data]);

  return (
    <>
      <div className="d-flex justify-content-around sales-and-orders-params mb-4 py-2 px-3 justify-items-center">
        <span className="text-capitalize mr-2 total-order-1">{title}</span>
        <div className="sales-data-wrapper">
          <span className="text-green sales-data mr-2">{fig}</span>
        </div>
      </div>
    </>
  );
};

export default SalesDriversParams;
