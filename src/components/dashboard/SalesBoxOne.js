import React from "react";
const SalesBoxOne = ({ title, value, centage }) => {
  return (
    <div className="col-6">
      <div className="box-1 mt-3  py-3 text-center">
        <div>
          <span className="total-order-2 py-3 text-green">{value} </span>
          <span className="total-order-0">
            <i className="fa fa-arrow-up text-green fa-lg"></i>
          </span>
          <sub className="centage">{centage}%</sub>
        </div>
        <div className="cancel-order">{title}</div>
      </div>
    </div>
  );
};
export default SalesBoxOne;
