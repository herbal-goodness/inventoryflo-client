import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import OrderSide from "./OrdersSidePane";
import ProductSide from "./ProductsSidePane";
import "./index.css";

const InventorySidePane = ({
  handleChange,
  handleSearch,
  type,
  handleStatus,
  clearFilter,
  category,
  handleCategoryFilter,
}) => {
  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const dateField1 = useRef();
  const dateField2 = useRef();

  const currentDateSelected = from.length > 4 ? new Date(from) : "";
  const fromSelectedDate =
    from.length > 4
      ? new Date(currentDateSelected).toISOString().substring(0, 10)
      : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (to.length > 4 && from.length > 4) {
      if (type === "order") {
        dispatch({
          type: "GET_ORDERS",
          payload: { createdAtMin: from, createdAtMax: to },
        });
      }
      if (type === "product") {
        dispatch({
          type: "GET_PRODUCTS",
          payload: { createdAtMin: from, createdAtMax: to },
        });
      }
    }
  };
  return (
    <div>
      <div className="input-group md-form form-sm form-1 pl-0 my-3 has-search form-group">
        <span className="fa fa-search form-control-feedback"></span>
        <input
          onChange={handleSearch}
          className="form-control my-0 py-1"
          type="text"
          placeholder="Search items"
          aria-label="Search"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input
            onChange={handleSearch}
            type="text"
            className="form-control"
            placeholder="Search Tags"
          />
        </div>
        <div className="form-group">
          <label htmlFor="select" className="inv-input-header">
            Channels
          </label>
          <select
            className="form-control"
            name="channel"
            onChange={handleChange}
          >
            <option className="hover-col" value="shopify">
              All Channels
            </option>
            <option className="hover-col" value="shopify">
              Shopify US
            </option>
            <option value="fba-amazon">Amazon</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="date1" className="inv-input-header">
              From
            </label>
            <input
              ref={dateField1}
              type="date"
              max={new Date().toISOString().substring(0, 10)}
              id="date2"
              onChange={({ currentTarget }) =>
                setFrom(new Date(currentTarget.valueAsDate).toJSON())
              }
              className="form-control p-1"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="date2" className="inv-input-header">
              To
            </label>
            <input
              ref={dateField2}
              type="date"
              min={
                new Date(fromSelectedDate).getMonth() ? fromSelectedDate : ""
              }
              max={new Date().toISOString().substring(0, 10)}
              id="date2"
              onChange={({ currentTarget }) =>
                setTo(new Date(currentTarget.valueAsDate).toJSON())
              }
              className="form-control p-1"
            />
          </div>
        </div>

        {(type === "product" && (
          <ProductSide
            handleStatus={handleStatus}
            category={category}
            handleCategoryFilter={handleCategoryFilter}
          />
        )) ||
          (type === "order" && (
            <OrderSide
              status={category}
              handleCategoryFilter={handleCategoryFilter}
            />
          ))}
        <div className="form-row">
          <div className="form-group col-md-6">
            <button
              type="submit"
              className="btn btn-info btn-block apply-filter"
            >
              Apply filter
            </button>
          </div>
          <div className="form-group col-md-6">
            <button
              onClick={() => {
                setFrom("");
                setTo("");
                clearFilter(dateField2, dateField1);
              }}
              type="clear"
              className="btn btn-link btn-block text-dark"
            >
              Clear filter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InventorySidePane;
