import React from "react";
import { Link } from "react-router-dom";
import ProductStatus from "../charts/ProductStatus";

const InventoryAnalysis = ({ data }) => {
  return (
    <div className="row pb-3 mx-2 mb-4 bg-white">
      <div className="col-sm-6 col-md-5 p-0">
        <div className="card-body pt-1 pb-0">
          <span className="dashboard-sales"> Inventory Analysis</span>
        </div>
      </div>
      <div className="col-sm-6 col-md-7 p-0">
        <div className="card-body pt-1 pb-0">
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
      <div className="col-12 col-sm-6">
        <div className="row">
          <div className="col-12 col-sm-12 sales-01 text-center text-green">
            Product Status
          </div>
          <div className="col-12 col-sm-12 sales-01 text-center text-green">
            <ProductStatus data={data} />
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6">
        <div className="row">
          <div className="col-12 col-sm-12 sales-01 text-center text-green">
            Warehouse Status
          </div>
          <div className="col-12 col-sm-12 sales-01 text-center text-green">
            <ProductStatus data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryAnalysis;
