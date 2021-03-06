import React from "react";

const PriceCardThree = () => {
  return (
    <div className="col-md-3 price-card-3 my-3 text-center">
      <div className="pb-3 font-italic price-fade price-label">
        <span className="font-weight-bold">INVENTORY FLO</span> for Shopify
      </div>
      <div className="forever-free">
        <span className="price-fade">PRO</span>{" "}
        <strong className="font-weight-bold"> 500</strong>
      </div>
      <div className="mt-3 mb-4">
        <span className="price-tag-1">$59</span>
        <sub className="price-tag-2">/mo</sub>
      </div>
      <div>
        <span className="price-fade">Up to </span>
        <span className="font-weight-bold">500</span>
        <span className="order-line price-fade"> orders </span>
        <span className="price-fade">per month</span>
      </div>
    </div>
  );
};

export default PriceCardThree;
