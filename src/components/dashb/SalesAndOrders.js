import React from "react";
import { Link } from "react-router-dom";

const SalesAndOrders = () => {
  return (
    <div className="row mx-2 pb-3 bg-white">
      <div className="col-sm-12 p-0">
        <div className="card-body pt-1 pb-0">
          <span className="dashboard-sales"> Sales and Order</span>
          <span className="float-right">
            <Link to="/" className="text-decoration-none text-dark">
              <i className="fa fa-calendar fa-lg"></i> This Month
            </Link>
          </span>
          <span className="float-right mr-4">
            <Link to="/" className="text-decoration-none text-dark">
              All Channels
            </Link>
          </span>
          <hr className="mt-1 mb-0 pb-0" />
        </div>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h4>Graph here...</h4>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="row">
          <div className="col-12">
            <div className="box-1 mt-3 py-3 text-center">
              <span className="total-order-1">Total Orders </span>
              <span className="total-order-3 text-green ml-4">60 </span>
              <span className="total-order-1">
                <i className="fa fa-arrow-up text-green fa-lg"></i>
              </span>
              <sub>2.5%</sub>
            </div>
          </div>
          <div className="col-6">
            <div className="box-1 mt-3  py-1 text-center">
              <div>
                <span className="total-order-2 text-green">32 </span>
                <span className="total-order-0">
                  <i className="fa fa-arrow-up text-green fa-lg"></i>
                </span>
                <sub>2.5%</sub>
              </div>
              <small className="my-1">Orders Fulfilled</small>
            </div>
          </div>

          <div className="col-6">
            <div className="box-1 mt-3  py-1 text-center">
              <div>
                <span className="total-order-2 text-green">14 </span>
                <span className="total-order-0">
                  <i className="fa fa-arrow-up text-green fa-lg"></i>
                </span>
                <sub>2.5%</sub>
              </div>
              <small className="my-1">Open Orders</small>
            </div>
          </div>

          <div className="col-6">
            <div className="box-1 mt-3  py-1 text-center">
              <div>
                <span className="total-order-2 text-green">10 </span>
                <span className="total-order-0">
                  <i className="fa fa-arrow-down text-red fa-lg"></i>
                </span>
                <sub>1%</sub>
              </div>
              <small className="my-1">Cancelled Orders</small>
            </div>
          </div>

          <div className="col-6">
            <div className="box-1 mt-3  py-1 text-center">
              <div>
                <span className="total-order-2 text-green">10 </span>
                <span className="total-order-0">
                  <i className="fa fa-arrow-down text-red fa-lg"></i>
                </span>
                <sub>1%</sub>
              </div>
              <small className="my-1">Refunds Provided</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAndOrders;
