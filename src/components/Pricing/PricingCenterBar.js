import React from "react";
import logo from "../../images/pricing.png";
import { Link } from "react-router-dom";

const PricingCenterBar = () => {
  return (
    <div className="col-4 p2-border px-0">
      <img class="img-fluid mx-auto" src={logo} alt="logo-1" />
      <div class="table-responsive">
        <table class="table table-borderless font-weight-bold text-center">
          <tbody>
            <tr>
              <td class="table-body-text py-4">
                Your all-in-one multi-channel
                <br /> management solution
              </td>
            </tr>
            <tr>
              <td class="table-body-text">
                <p className="empty-box" />
              </td>
            </tr>
            <tr>
              <td class="table-body-text pb-3">Plans start FREE!</td>
            </tr>
            <tr>
              <td class="table-body-text px-0 py-4 px-2 px-sm-4">
                <Link to="/pricing-pro" className="btn btn-block pricing-btn">
                  View Plans
                </Link>
              </td>
            </tr>
            <tr>
              <td class="table-header-text py-4 text-light">-</td>
            </tr>
            <tr>
              <td class="table-body-text price-check price-check-2 py-4">
                INVENTORY FLO
              </td>
            </tr>
            <tr>
              <td class="table-body-text price-check price-check-1 py-4">
                INVENTORY FLO
              </td>
            </tr>
            <tr>
              <td class="table-body-text price-check price-check-1 py-4">
                INVENTORY FLO
              </td>
            </tr>
            <tr>
              <td class="table-header-text price-check-1 text-light py-4">-</td>
            </tr>
            <tr>
              <td class="table-body-text price-check-3 price-check py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text price-check-3 price-check py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text price-check-1 price-check py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-header-text price-check-1 text-light py-4">-</td>
            </tr>
            <tr>
              <td class="table-body-text  price-check price-check-1 py-4 multi-channel">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text  price-check price-check-1 py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text  price-check price-check-1 py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text  price-check price-check-1 py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text  price-check price-check-1 py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-header-text  price-check text-light py-4">-</td>
            </tr>
            <tr>
              <td class="table-body-text price-check-2 price-check py-4">
                <i
                  class="fa fa-check price-check-1 price-check text-green fa-lg"
                  aria-hidden="true"
                ></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text price-check-1 price-check py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text price-check-1 price-check py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text price-check-1 price-check py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text price-check-1 price-check py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text price-check-1 price-check pt-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingCenterBar;
