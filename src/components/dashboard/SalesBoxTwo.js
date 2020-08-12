import React from "react";
const SalesBoxTwo = ({ title, value, centage }) => {
  return (
    <div className="col-6">
      <div className="box-1 mt-3  py-1 text-center">
        <div>
          <span className="total-order-2 text-green">{value} </span>
          <span className="total-order-0">
            <i className="fa fa-arrow-down text-red fa-lg"></i>
          </span>
          <sub>{centage}%</sub>
        </div>
        <small className="my-1">{title}</small>
      </div>
    </div>
  );
};
export default SalesBoxTwo;
