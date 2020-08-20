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
          <h5 className="text-dark mt-3">
            Free to start + unlimited access for 30 days. No credit card
            required. No setup costs.
          </h5>
        </div>
      </div>
      <div className="table-padding mx-md-5 text-center">
        {/* <PricingLeftBar />
        <PricingCenterBar />
        <PricingRightBar /> */}
        <table class="table table-borderless font-weight-bold">
          <tbody>
            <tr style={{ paddingTop: "20px", border: "1px solid black" }}>
              <td></td>
              <td className="p1-border">Doe</td>
              <td></td>
            </tr>
            <tr className="p1-border ">
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr className="p1-border ">
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
