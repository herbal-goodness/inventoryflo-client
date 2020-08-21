import React from "react";
import { Link } from "react-router-dom";
import logoShopify from "../../images/pricing-shopify-big.png";
import PriceCardOne from "./pricing-pro-cards/PriceCardOne";
import PriceCardTwo from "./pricing-pro-cards/PriceCardTwo";
import PriceCardThree from "./pricing-pro-cards/PriceCardThree";
import PriceCardFour from "./pricing-pro-cards/PriceCardFour";

const PricingPro = () => {
  return (
    <div className="pb-5 price-s-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center mt-4 mb-2">
            <h1 className="pricing-s-title">Simple, Predictable Pricing</h1>
            <h5 className="text-dark mt-3">
              Free to start + unlimited access for 30 days. No credit card
              required. No setup costs.
            </h5>
          </div>
          <div className="col-md-12 text-center mb-5">
            <button className="btn btn-outline-dark">Monthly Billing</button>
            <span className="price-label mx-2">or</span>
            {""}
            <button className="btn btn-outline-dark">Annual Billing</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mx-5">
          <PriceCardOne />
          <PriceCardTwo />
          <PriceCardThree />
          <PriceCardFour />
        </div>
        <div className="row mx-5 mt-2 text-center">
          <div className="col-12 mt-5">
            <Link to="/pricing-pro" className="btn btn-lg pricing-btn">
              Start for FREE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPro;
