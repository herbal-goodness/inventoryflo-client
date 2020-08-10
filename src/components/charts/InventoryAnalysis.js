import React from "react";
import { Link } from "react-router-dom";

const InventoryAnalysis = () => {
  return (
    <div className="row mx-2 pb-3 bg-white">
      <div className="col-sm-12 p-0">
        <div className="card-body pt-1 pb-0">
          <span className="dashboard-sales"> Inventory Analysis</span>
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
      <div className="col-sm-6">
        <div className="card-body">
          <h4>Graph here...</h4>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="row">
          <div className="col-12">here...</div>
        </div>
      </div>
    </div>
  );
};

export default InventoryAnalysis;
