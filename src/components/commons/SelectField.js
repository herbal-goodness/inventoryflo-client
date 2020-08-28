import React, { useState, useEffect } from "react";

const SelectField = ({ categories }) => {
  let catArray = new Set();
  categories.map((category) => {
    catArray.add(category.toJS().product_type);
  });

  return catArray.map((cat, index) => (
    <>
      <div className="form-group">
        <label htmlFor="select">Categories</label>
        <select className="form-control">
          <option key={index}>{cat}</option>
        </select>
      </div>
    </>
  ));
};

export default SelectField;
