import React from "react";

const PriceCardOne = () => {
  return (
    <div className="col-md-3 price-card-pro-1 my-3 text-center">
      <div className="forever-free">
        <span className="price-fade">FOREVER</span>{" "}
        <strong className="font-weight-bold">FREE</strong>
      </div>
      <div className="mt-3 mb-4">
        <span className="price-tag-1">$0</span>
        <sub className="price-tag-2">/mo</sub>
      </div>
      <div className="mb-5">
        <span className="price-fade">Up to </span>
        <span className="font-weight-bold">30</span>
        <span className="order-line price-fade"> orders </span>
        <span className="price-fade">per month</span>
      </div>

      <div className="pt-3">
        <hr />
      </div>
      <div className="price-text-smaller font-weight-bold">ADD-ONS</div>
      <div className="row my-3">
        <div className="col-8 text-left price-text-smallest">
          None Available
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default PriceCardOne;
