import React, { useEffect, useState } from "react";
import SalesTable from "./ProductsTable";
import InventorySidePane from "./InventorySidePane";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

/**
 * Products compoinent, renders the products table
 */
function SalesContainer() {
  const dispatch = useDispatch();
  const [exportData, setExport] = useState(null);
  const [query, setQuery] = useState("");

  const {
    isLoading,
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
    }),
    shallowEqual
  );

  const exportFile = () => {
    exportData.save();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setQuery(value);
  };

  useEffect(() => {
    hasShopifyUrl &&
      hasShopifySecret &&
      isSuccessful &&
      sales === null &&
      dispatch({ type: "GET_PRODUCTS" });
  }, []);

  return (
    <div className="container-fluid mx-auto">
      <div className="row">
        <div className="col-md-3 inv-side-wrapper pt-5 inv-col-1">
          <h2 className="filter-inv-header">filter products</h2>
          <InventorySidePane handleSearch={handleSearch} />
        </div>
        <div className="col-md-9 inv-col-2">
          <header className="d-flex justify-content-between mb-2 dashboard-header">
            <h2>
              <i className="fa fa-cube"></i> Products
            </h2>
            <div>
              <button to="" className="btn btn-info apply-filter mr-3">
                <i className="fa fa-sign-out fa-fw mr-1" aria-hidden="true"></i>
                Import from CSV
              </button>

              <button
                onClick={exportFile}
                className="btn btn-info apply-filter"
              >
                <i className="fa fa-sign-out fa-fw mr-1" aria-hidden="true"></i>
                Export
              </button>
            </div>
          </header>

          <SalesTable
            setExport={setExport}
            isLoading={isLoading}
            sales={sales}
            query={query}
          />
        </div>
      </div>
    </div>
  );
}

export default SalesContainer;
