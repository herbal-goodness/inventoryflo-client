import React from "react";

const PriceCardTwo = () => {
  return (
    <div className="col-md-3 price-card-2 text-center">
      <div className="pb-3 font-italic price-fade price-label">
        <span className="font-weight-bold">Inventory Flo</span> for Shopify
      </div>
      <div className="forever-free">
        <span className="price-fade">PRO</span>{" "}
        <strong className="font-weight-bold"> 100</strong>
      </div>
      <div className="mt-3 mb-4">
        <span className="price-tag-1">$19</span>
        <sub className="price-tag-2">/mo</sub>
      </div>
      <div>
        <span className="price-fade">Up to </span>
        <span className="font-weight-bold">100</span>
        <span className="order-line price-fade"> orders </span>
        <span className="price-fade">per month</span>
      </div>
    </div>
  );
};

export default PriceCardTwo;
