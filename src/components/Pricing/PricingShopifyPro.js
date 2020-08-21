import React from "react";
import { Link } from "react-router-dom";
import logoShopify from "../../images/pricing-shopify-big.png";
import PriceCardOne from "./pricing-shopify-cards/PriceCardOne";
import PriceCardTwo from "./pricing-shopify-cards/PriceCardTwo";
import PriceCardThree from "./pricing-shopify-cards/PriceCardThree";
import PriceCardFour from "./pricing-shopify-cards/PriceCardFour";

const PricingShopifyPro = () => {
  return (
    <div className="pb-5 price-s-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center mt-4">
            <img class="img-fluid mx-auto" src={logoShopify} alt="logo-1" />
          </div>
          <div className="col-md-12 text-center mb-2">
            <h1 className="pricing-s-title">
              Flexible plans that grow with you
            </h1>
            <h5 className="text-dark mt-3">
              Free to start + unlimited access for 30 days. No credit card
              required. No setup costs.
            </h5>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mx-3 mx-sm-2 mx-md-3 mx-lg-5">
          <PriceCardOne />
          <PriceCardTwo />
          <PriceCardThree />
          <PriceCardFour />
        </div>
        <div className="row mx-5 mt-5 text-center">
          <div className="col-12 over-price">
            Over 2k orders per month?{" "}
            <Link to="/pricing-sfs-pro" className="text-green">
              See our High Volume plans
            </Link>
          </div>
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

export default PricingShopifyPro;
