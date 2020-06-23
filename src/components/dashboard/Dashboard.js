import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SalesChart from "../charts/SalesChart";
import Orders from "./Orders";

const Dashboard = () => {
  return (
    <div className="container-fluid mx-auto main">
      <header className="d-flex justify-content-between mb-2 dashboard-header">
        <h2>
          <i className="fa fa-tachometer"></i> dashboard
        </h2>
        <h4>Last update less than a minute ago</h4>
      </header>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-header">To Do</div>
            <div className="card-body">
              <div className="title">
                <h2>Listing</h2>
              </div>
              <h5 className="card-title">
                <i className="fa fa-tag mr-2 font-icons" aria-hidden="true"></i>{" "}
                Create your first listing
              </h5>

              <div className="overlay-right overlay-right-1">
                <button className="btn btn-secondary" title="start">
                  <i
                    className="fa fa-external-link font-icons"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
              <div className="title">
                <h2>Inventory</h2>
              </div>
              <h5 className="card-title">
                <i
                  className="fa fa-refresh mr-2 font-icons"
                  aria-hidden="true"
                ></i>{" "}
                Enable inventory sync
              </h5>

              <div className="overlay-right overlay-right-2">
                <button className="btn btn-secondary" title="start">
                  <i
                    className="fa fa-external-link font-icons"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
              <div className="title">
                <h2>Order</h2>
              </div>
              <h5 className="card-title">
                <i
                  className="fa fa-truck mr-2 font-icons"
                  aria-hidden="true"
                ></i>{" "}
                Fulfill an order
              </h5>

              <div className="overlay-right overlay-right-3">
                <button className="btn btn-secondary" title="start">
                  <i
                    className="fa fa-external-link font-icons"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <SalesChart />
          <Orders />
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-header">Sales Titans</div>
            <div className="card-body">
              <h5 className="card-title">Shopify is the best shot</h5>
              <p className="card-text">
                Try inventoryflo roadmap to a succesful sales magnate .
              </p>
              <Link to="" className="btn btn-primary">
                Try InventoryFlo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
