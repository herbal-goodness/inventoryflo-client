import React, { useState } from "react";
import { useDispatch } from "react-redux";

const InventorySidePane = ({
  handleChange,
  handleSearch,
  type,
  handleStatus,
  clearFilter,
}) => {
  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (to.length > 4 && from.length > 4) {
      type === "order" &&
        dispatch({
          type: "GET_ORDERS",
          payload: { createdAtMin: from, createdAtMax: to },
        });
      type === "product" &&
        dispatch({
          type: "GET_PRODUCTS",
          payload: { createdAtMin: from, createdAtMax: to },
        });
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
          placeholder="Search products"
          aria-label="Search"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group has-search">
          {/* <label htmlFor="tags">Tags</label> */}
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
              Shopify US
            </option>
            <option value="fba-amazon">FBA-Amazon Canada</option>
          </select>
        </div>
        <h6 className="inv-date-header">Inventory</h6>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="date1" className="inv-input-header">
              From
            </label>
            <input
              type="date"
              id="date2"
              onChange={({ currentTarget }) =>
                setFrom(new Date(currentTarget.valueAsDate).toJSON())
              }
              class="form-control"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="date2" className="inv-input-header">
              To
            </label>
            <input
              type="date"
              id="date2"
              onChange={({ currentTarget }) =>
                setTo(new Date(currentTarget.valueAsDate).toJSON())
              }
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="select" className="inv-input-header">
            Categories
          </label>
          <select disabled className="form-control">
            <option>All Categories</option>
            <option>New</option>
            <option>Used</option>
            <option>Reconditioned</option>
            <option>Damaged</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="select" className="inv-input-header">
            Conditions
          </label>
          <select disabled className="form-control">
            <option>All Conditions</option>
            <option>New</option>
            <option>Used</option>
            <option>Reconditioned</option>
            <option>Damaged</option>
          </select>
        </div>

        <div className="form-row inv-btn">
          <div className="form-group col-md-6">
            <button
              onClick={type === "product" ? () => handleStatus(2) : () => {}}
              type="button"
              className="btn btn-block"
            >
              Available
            </button>
          </div>
          <div className="form-group col-md-6">
            <button
              onClick={
                type === "product"
                  ? () => handleStatus("Out of stock")
                  : () => {}
              }
              type="button"
              className="btn btn-block"
            >
              Out of stock
            </button>
          </div>
        </div>

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
              onClick={clearFilter}
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
