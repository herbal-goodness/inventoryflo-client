import React from "react";

import { Link } from "react-router-dom";
import { Spinner } from "../../utils/components";

function SalesTable({ products }) {
  const showProducts = () => {
    if (products) {
      return products.map(
        (
          { age, firstName, lastName, progress, status, subRows, visits },
          index
        ) => (
          <tr key={index}>
            <td>
              <input type="checkbox" class="form-check-input" />
            </td>
            <td className="truncate">{age}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{progress}</td>
            <td>{status}</td>
            <td>{subRows}</td>
            <td>{visits}</td>
          </tr>
        )
      );
    } else {
      return <Spinner />;
    }
  };
  return (
    <>
      <div class="card">
        <div class="card-header">Inventory Table</div>
        <div class="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">
                  <div className="checkbox">
                    <input type="checkbox" class="form-check-input" />
                    <label htmlFor="checkbox1"></label>
                  </div>
                </th>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col" className="sku">
                  SKU
                </th>
                <th scope="col">
                  <Link to="">category</Link>
                </th>
                <th scope="col">
                  <Link to="">quantity</Link>
                </th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>{showProducts()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SalesTable;
