import React from "react";
import { Link } from "react-router-dom";

const MoreInfoSidePane = () => {
  return (
    <>
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
    </>
  );
};

export default MoreInfoSidePane;
