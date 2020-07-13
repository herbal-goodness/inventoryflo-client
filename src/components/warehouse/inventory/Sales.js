import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SalesTable from "./Table";
import { makeData } from "../constants";
import InventorySidePane from "./InventorySidePane";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Button } from "react-bootstrap";

function SalesContainer() {
  const dispatch = useDispatch();
  const [exportData, setExport] = useState(null);

  const {
    isLoading,
    productsLoaded,
    sales,
    hasShopifyUrl,
    hasShopifySecret,
    isSuccessful,
  } = useSelector(
    ({ sales, userInfo }) => ({
      hasShopifyUrl:
        userInfo.user.shopifyDomain && userInfo.user.shopifyDomain.length > 3,
      hasShopifySecret:
        userInfo.user.shopifySecret && userInfo.user.shopifySecret.length > 3,
      isSuccessful: userInfo.successful,
      sales: sales.products,
      isLoading: sales.loading,
      productsLoaded: sales.successful,
    }),
    shallowEqual
  );
  useEffect(() => {
    hasShopifyUrl &&
      hasShopifySecret &&
      isSuccessful &&
      sales === null &&
      dispatch({ type: "GET_PRODUCTS" });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (isLoading) {
        dispatch({
          type: "PRODUCTS_ERROR",
        });
      }
    }, 5000);
  }, []);

  const exportFile = () => {
    exportData.save();
  };

  return (
    <div className="container-fluid mx-auto main">
      <div className="row">
        <div className="col-md-3">
          <h2 className="filter-inv-header">filter inventory</h2>
          <InventorySidePane products={makeData(100)} />
        </div>
        <div className="col-md-9">
          <header className="d-flex justify-content-between mb-2 dashboard-header">
            <h2>
              <i className="fa fa-cube"></i> Sales Trend
            </h2>
            <h4>
              <Link to="" className="btn btn-outline-primary mr-2">
                <i className="fa fa-sign-out fa-fw mr-1" aria-hidden="true"></i>
                Import from CSV
              </Link>
            </h4>
            <Button onClick={exportFile} className="btn btn-outline-primary">
              <i className="fa fa-sign-out fa-fw mr-1" aria-hidden="true"></i>
              Export
            </Button>
          </header>

          <SalesTable
            setExport={setExport}
            isLoading={isLoading}
            sales={sales}
          />
        </div>
      </div>
    </div>
  );
}

export default SalesContainer;
