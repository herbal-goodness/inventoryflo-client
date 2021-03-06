import React from "react";
import Skeleton from "react-loading-skeleton";

const SalesBoxOne = ({ title, value, changeRate, isNegative }) => {
  return (
    <div className="col-6">
      {changeRate ? (
        <div className="box-1 mt-3  py-3 text-center">
          <div>
            <span className="total-order-2 py-3 text-green">{value} </span>
            <span className="total-order-0">
              <i
                className={
                  isNegative(changeRate)
                    ? "fa fa-arrow-down text-red fa-lg"
                    : "fa fa-arrow-up text-green fa-lg"
                }
              ></i>
            </span>
            <sub>{changeRate}</sub>
          </div>
          <div className="cancel-order">{title}</div>
        </div>
      ) : (
        <div className="skeleton-body">
          <Skeleton count={1} height={80} />
        </div>
      )}
    </div>
  );
};
export default SalesBoxOne;
