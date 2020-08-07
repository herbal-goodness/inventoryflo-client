import React from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "../dashboard/DashboardHeader";
import SalesAndOrders from "./SalesAndOrders";

const Dashb = () => {
  return (
    <div className="container-fluid mx-auto dashboad-bg">
      <DashboardHeader />
      <div className="row">
        <div className="col-sm-9 mb-3 mb-sm-1">
          <SalesAndOrders />

          <div className="row mx-2 my-4 bg-white">
            <div className="col-sm-12 p-0 mb-2">
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
            <div className="col-sm-4">
              <div className="row">
                <div className="col-12 col-sm-12 sales-01 text-center text-green">
                  Sales By Channels
                </div>
                <div className="circle-bar col-12 bg-success justify-content-between">
                  <div className="circle-bar-1 d-inline"></div>
                  <div className="">Amazon</div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="row">
                <div className="col-12 col-sm-12 sales-01 text-center text-green">
                  Sales By Products
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="row">
                <div className="col-12 col-sm-12 sales-01 text-center text-green">
                  Slow moving products
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="get-started-b py-2 px-3">Get started</div>
          <div className="get-started-w py-2 pb-5">Get started</div>
        </div>
      </div>
    </div>
  );
};

export default Dashb;
