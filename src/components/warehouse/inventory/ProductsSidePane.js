import React from "react";

const ProductSide = ({ handleStatus, handleCategoryFilter, category }) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="select" className="inv-input-header">
          Categories
        </label>

        <select onChange={handleCategoryFilter} className="form-control">
          <option selected value={"all"}>
            All Categories
          </option>
          {category.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
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
            onClick={() => handleStatus(2)}
            type="button"
            className="btn btn-block"
          >
            Available
          </button>
        </div>
        <div className="form-group col-md-6">
          <button
            onClick={() => handleStatus("Out of stock")}
            type="button"
            className="btn btn-block"
          >
            Out of stock
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductSide;
