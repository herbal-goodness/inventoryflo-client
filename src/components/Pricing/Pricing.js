import React from "react";
import { Link } from "react-router-dom";
import PricingLeftBar from "./PricingLeftBar";
import PricingCenterBar from "./PricingCenterBar";
import PricingRightBar from "./PricingRightBar";

const Pricing = () => {
  return (
    <div className="container-fluid price-header">
      <div className="row">
        <div className="col-md-12 text-center mb-5">
          <h1 className="pricing-title">Choose the Solution for You</h1>
          <h5 className="text-dark xs-pricing-title mt-3">
            Free to start + unlimited access for 30 days. No credit card
            required. No setup costs.
          </h5>
        </div>
      </div>
      <div className="row px-0 px-sm-1 px-md-2 mx-md-5 text-center">
        <PricingLeftBar />
        <PricingCenterBar />
        <PricingRightBar />
      </div>
    </div>
  );
};

export default Pricing;
