import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import OrderSide from "./OrdersSidePane";
import ProductSide from "./ProductsSidePane";
import Select from "react-select";
import "./index.css";

const InventorySidePane = ({
  handleSearch,
  handleChange,
  type,
  handleStatus,
  clearFilter,
  category,
  handleCategoryFilter,
}) => {
  const handleChanges = (value) => {
    handleChange({ ...value, name: "channel" });
  };
  const shopOptions = [
    { value: "channels", label: "All Channels" },
    { value: "shopify", label: "Shopify US" },
    { value: "fba-amazon", label: "Amazon" },
  ];

  const selectTheme = (theme) => ({
    ...theme,
    borderRadius: 5,
    colors: {
      ...theme.colors,
      primary: "#20846B",
      primary25: "#f7931e",
    },
    spacing: {
      ...theme.spacing,
      menuGutter: 3,
    },
  });

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
        <div>
          <label htmlFor="select" className="inv-input-header">
            Channels
          </label>
          <Select
            theme={selectTheme}
            label="Single select"
            options={shopOptions}
            className="mb-3"
            placeholder="All Channels"
            onChange={handleChanges}
          />
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
