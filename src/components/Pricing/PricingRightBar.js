import React from "react";
import { Link } from "react-router-dom";
import logoShopify from "../../images/pricing-shopify.png";

const PricingRightBar = () => {
  return (
    <div className="col-4 p1-border mt-4 px-0">
      <img class="img-fluid mx-auto" src={logoShopify} alt="logo-1" />
      <div class="table-responsive">
        <table class="table table-borderless font-weight-bold text-center">
          <tbody>
            <tr>
              <td class="table-body-text py-4 text-center">
                A powerful marketplace <br /> management tool <br /> for Shopify
                stores
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-3">
                <Link className="text-green text-decoration-none" to="/">
                  Learn More
                </Link>
              </td>
            </tr>
            <tr>
              <td class="table-body-text pb-2">
                <div className="pricing-r-box">Plans start FREE!</div>
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-4 px-5">
                <Link
                  to="./pricing-sfs-pro"
                  className="btn pricing-btn btn-block"
                >
                  View Plans
                </Link>
              </td>
            </tr>
            <tr>
              <td class="table-header-text py-4 text-light">-</td>
            </tr>
            <tr>
              <td class="table-body-text price-check-1 py-4">Shopify</td>
            </tr>
            <tr>
              <td class="table-body-text py-4">Shopify</td>
            </tr>
            <tr>
              <td class="table-body-text py-4">Shopify</td>
            </tr>
            <tr>
              <td class="table-header-text   price-check-2 text-light py-4">
                -
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-header-text text-light py-4">-</td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-minus  fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-minus fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-header-text text-light py-4">-</td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-check text-green fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-minus fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-minus fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-minus  fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text py-4">
                <i class="fa fa-minus fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td class="table-body-text pt-4">
                <i class="fa fa-minus fa-lg" aria-hidden="true"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingRightBar;
