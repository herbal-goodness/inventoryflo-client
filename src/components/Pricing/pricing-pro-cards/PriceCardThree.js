import React, { useState } from "react";
import Switch from "./Switch";

const PriceCardThree = ({ price }) => {
  const [checked, setChecked] = useState({ isChecked: false });
  return (
    <div className="col-md-3 col-sm-6 col-12 price-card-pro-3 my-3 text-center">
      <div className="forever-free">
        <span className="price-fade">PRO</span>{" "}
        <strong className="font-weight-bold"> 500</strong>
      </div>
      <div className="mt-3 mb-4">
        {!checked.isChecked && price.type === "monthly" && (
          <span className="price-tag-1">${price.pro500}</span>
        )}
        {checked.isChecked && price.type === "monthly" && (
          <span className="price-tag-1">${price.adsPro500}</span>
        )}
        {!checked.isChecked && price.type === "annual" && (
          <span className="price-tag-1">${price.pro500}</span>
        )}
        {checked.isChecked && price.type === "annual" && (
          <span className="price-tag-1">${price.adsPro500}</span>
        )}
        <sub className="price-tag-2">/mo</sub>
      </div>

      {price.type === "annual" && (
        <div className="mt-3 mb-4 price-fade">(billed annually)</div>
      )}

      <div className="mb-5">
        <span className="price-fade">Up to </span>
        <span className="font-weight-bold">500</span>
        <span className="order-line price-fade"> orders </span>
        <span className="price-fade">per month</span>
      </div>
      <div className="pt-3">
        <hr />
      </div>
      <div className="price-text-smaller  font-weight-bold">ADD-ONS</div>
      <Switch checked={(checked) => setChecked({ isChecked: checked })} />
    </div>
  );
};

export default PriceCardThree;
