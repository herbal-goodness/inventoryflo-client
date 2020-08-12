import React from "react";
import { Link } from "react-router-dom";

const DashboardSubHeaders = ({ title }) => {
  return (
    <>
      <div className="col-sm-6 col-md-5 p-0">
        <div className="card-body pt-2 pb-0">
          <span className="dashboard-sales"> {title}</span>
        </div>
      </div>
      <div className="col-sm-6 col-md-7 p-0">
        <div className="card-body pt-2 pb-0">
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
        </div>
      </div>
      <div className="col-12  mb-3">
        <hr className="mt-1 mb-0 pb-0" />
      </div>
    </>
  );
};

export default DashboardSubHeaders;
