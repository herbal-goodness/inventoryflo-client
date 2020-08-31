import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SalesBoxOne = ({ title, value, changeRate, isNegative }) => {
  return 1 < 2 ? (
    <div style={{ fontSize: 20, lineHeight: 5 }}>
      <SkeletonTheme color="lightGray" highlightColor="#444">
        <Skeleton count={4} height={50} />
      </SkeletonTheme>
    </div>
  ) : (
    <div className="col-6">
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
    </div>
  );
};
export default SalesBoxOne;
