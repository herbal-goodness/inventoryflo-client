import React from "react";

const OrderSide = ({ status, handleCategoryFilter }) => {
  return (
    <div>
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
          Status
        </label>
        <select
          defaultValue={"all"}
          className="form-control"
          onChange={handleCategoryFilter}
        >
          <option value={"all"}>All Status</option>
          {status.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="select" className="inv-input-header">
          Ships from
        </label>
        <select className="form-control">
          <option>All locations</option>
        </select>
      </div>
    </div>
  );
};

export default OrderSide;
