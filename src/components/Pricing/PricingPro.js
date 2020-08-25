import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PriceCardOne from "./pricing-pro-cards/PriceCardOne";
import PriceCardTwo from "./pricing-pro-cards/PriceCardTwo";
import PriceCardThree from "./pricing-pro-cards/PriceCardThree";
import PriceCardFour from "./pricing-pro-cards/PriceCardFour";

const PricingPro = () => {
  const [price, setPrice] = useState({});

  const monthly = {
    type: "monthly",
    pro100: 29,
    pro500: 79,
    pro2k: 179,
    adsPro100: 48,
    adsPro500: 98,
    adsPro2k: 198,
  };
  const annual = {
    type: "annual",
    pro100: 24,
    pro500: 66,
    pro2k: 149,
    adsPro100: 40,
    adsPro500: 82,
    adsPro2k: 165,
  };

  useEffect(() => {
    setPrice(monthly);
  }, []);

  return (
    <div className="pb-5 price-s-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center mt-4 mb-2">
            <h1 className="pricing-s-title">-Simple, Predictable Pricing</h1>
            <h5 className="text-dark mt-3">
              Free to start + unlimited access for 30 days. No credit card
              required. No setup costs.
            </h5>
          </div>
          <div className="col-md-12 text-center mb-5">
            <button
              className="btn btn-outline-dark"
              onClick={() => setPrice(monthly)}
            >
              Monthly Billing
            </button>
            <span className="price-label mx-2">or</span>
            {""}
            <button
              className="btn btn-outline-dark"
              onClick={() => setPrice(annual)}
            >
              Annual Billing
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mx-3 mx-sm-2 mx-md-3 mx-lg-5">
          <PriceCardOne />
          <PriceCardTwo price={price} />
          <PriceCardThree price={price} />
          <PriceCardFour price={price} />
        </div>
        <div className="row mx-5 mt-2 text-center">
          <div className="col-12 mt-5">
            <Link to="/signup-user" className="btn btn-lg pricing-btn">
              Start for FREE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPro;
