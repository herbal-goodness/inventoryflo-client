import React from "react";
import Switch from "./Switch";

const PriceCardTwo = ({ price: { type, pro100 } }) => {
  return (
    <div className="col-md-3 col-sm-6 col-12 price-card-pro-2 text-center">
      <div className="forever-free">
        <span className="price-fade">PRO</span>{" "}
        <strong className="font-weight-bold"> 100</strong>
      </div>
      <div className="mt-3 mb-4">
        <span className="price-tag-1">${pro100}</span>
        <sub className="price-tag-2">/mo</sub>
      </div>

      {type === "annual" && (
        <div className="mt-3 mb-4 price-fade">(billed annually)</div>
      )}

      <div className="mb-5">
        <span className="price-fade">Up to </span>
        <span className="font-weight-bold">100</span>
        <span className="order-line price-fade"> orders </span>
        <span className="price-fade">per month</span>
      </div>
      <div className="pt-3">
        <hr />
      </div>
      <div className="price-text-smaller  font-weight-bold">ADD-ONS</div>
      <Switch />
    </div>
  );
};

export default PriceCardTwo;