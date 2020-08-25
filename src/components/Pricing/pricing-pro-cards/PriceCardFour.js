import React, { useState } from "react";
import { Link } from "react-router-dom";
import Switch from "./Switch";

const PriceCardFour = ({ price }) => {
  const [checked, setChecked] = useState({ isChecked: false });
  return (
    <div className="col-md-3 col-sm-5 col-12 price-card-pro-4 my-3 text-center">
      <div className="forever-free">
        <span className="price-fade">PRO</span>
        <strong className="font-weight-bold"> 2K</strong>
      </div>
      <div className="mt-3 mb-4">
        {!checked.isChecked && price.type === "monthly" && (
          <span className="price-tag-1">${price.pro2k}</span>
        )}
        {checked.isChecked && price.type === "monthly" && (
          <span className="price-tag-1">${price.adsPro2k}</span>
        )}
        {!checked.isChecked && price.type === "annual" && (
          <span className="price-tag-1">${price.pro2k}</span>
        )}
        {checked.isChecked && price.type === "annual" && (
          <span className="price-tag-1">${price.adsPro2k}</span>
        )}
        <sub className="price-tag-2">/mo</sub>
      </div>

      {price.type === "annual" && (
        <div className="mt-3 mb-4 price-fade">(billed annually)</div>
      )}

      <div>
        <span className="price-fade">Up to </span>
        <span className="font-weight-bold">2K</span>
        <span className="order-line price-fade"> orders </span>
        <span className="price-fade">per month</span>
      </div>

      <div className="mb-4 price-fade price-text-small px-2">
        Over 2k orders per month?{" "}
        <Link to="/pricing-pro" className="text-green">
          See our High Volume plans
        </Link>
      </div>
      <div>
        <hr />
      </div>
      <div className="price-text-smaller font-weight-bold">ADD-ONS</div>
      <Switch checked={(checked) => setChecked({ isChecked: checked })} />
    </div>
  );
};

export default PriceCardFour;
