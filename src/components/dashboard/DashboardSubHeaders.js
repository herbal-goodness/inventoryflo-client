import React, { useState } from "react";
import { Link } from "react-router-dom";

const DashboardSubHeaders = ({
  title,
  handleChange,
  handleChannelChange,
  type,
}) => {
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
            <div className="input-group">
              <div className="input-group-prepend s-calendar bg-calendar">
                <label
                  className="input-group-text input-group-sm mr-0 px-0 bg-calendar"
                  for="inputGroupSelect01"
                >
                  <i className="fa fa-calendar"></i>
                </label>
              </div>
              <select
                className="custom-select pl-1 bg-calendar"
                id="inputGroupSelect01"
                onChange={(e) => handleChange(e, type)}
              >
                <option value={"thisMonth"}>This Month</option>
                <option value="thisWeek">This week</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="last7days">Last 7 days</option>
                <option selected value="last30days">
                  Last 30 days
                </option>
              </select>
            </div>
          </span>

          <span className="float-right mr-4">
            <div className="input-group">
              <select
                className="custom-select bg-calendar"
                id="inputGroupSelect01"
                onChange={(e) => handleChannelChange(e, type)}
                defaultValue="all"
              >
                <option selected value="all">
                  All Channels
                </option>
                <option value="shopify">Shopify</option>
                <option value="amazon">Amazon</option>
                <option value="walmart">Walmart</option>
              </select>
            </div>
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
