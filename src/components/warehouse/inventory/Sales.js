import React from "react";
import { Link } from "react-router-dom";
import SalesTable from "./SalesTable";
import { makeData } from "../constants";
import InventorySidePane from "./InventorySidePane";

function SalesContainer() {
  return (
    <div className="container-fluid mx-auto main">
      <div className="row">
        <div className="col-md-3">
          <h2 className="filter-inv-header">filter inventory</h2>
          <InventorySidePane products={makeData(100)} />
        </div>
        <div className="col-md-9">
          <header className="d-flex justify-content-between mb-2 dashboard-header">
            <h2>
              <i className="fa fa-cube"></i> inventory
            </h2>
            <h4>
              <Link to="" className="btn btn-outline-primary mr-2">
                <i className="fa fa-sign-out fa-fw mr-1" aria-hidden="true"></i>{" "}
                Import from CSV
              </Link>
              <Link to="" className="btn btn-info mr-2">
                <i className="fa fa-building fa-fw mr-1" aria-hidden="true"></i>{" "}
                Manage warehouses
              </Link>
              <Link to="" className="btn btn-outline-primary">
                <i className="fa fa-sign-out fa-fw mr-1" aria-hidden="true"></i>{" "}
                Export
              </Link>
            </h4>
          </header>
          <SalesTable products={makeData(100)} />
        </div>
      </div>
    </div>
  );
}

export default SalesContainer;
