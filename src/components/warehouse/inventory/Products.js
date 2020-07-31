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
  const [status, setStatus] = useState([]);
  const [filterChannel, setFilter] = useState({});

  const {
    isLoading,
    sales,
    categories,
    hasShopifyUrl,
    hasShopifySecret,
    isSuccessful,
  } = useSelector(
    ({ sales, userInfo }) => ({
      categories: sales.categories,
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

  const clearFilter = (e) => {
    e.preventDefault();
    dispatch({ type: "GET_PRODUCTS", payload: {} });
    setStatus([]);
  };

  const exportFile = () => {
    exportData.save();
  };

  const handleStatus = (val) => {
    const result = sales.filter(
      ({ totalQuantity }) =>
        totalQuantity === val ||
        (typeof totalQuantity === "number" &&
          totalQuantity >= val &&
          typeof totalQuantity !== "string")
    );
    setStatus(result);
  };

  const handleCategoryFilter = (e) => {
    e.preventDefault();
    const result = sales.filter(
      ({ product_type }) => product_type === e.target.value
    );
    setStatus(result);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setQuery(value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFilter({ ...filterChannel, [name]: value });
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
          <InventorySidePane
            category={(sales && categories) || []}
            clearFilter={clearFilter}
            handleStatus={handleStatus}
            handleChange={handleChange}
            handleSearch={handleSearch}
            handleCategoryFilter={handleCategoryFilter}
            type="product"
          />
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
            sales={(status.length > 0 && status) || sales}
            query={query}
            status={status}
            filterChannel={filterChannel}
          />
        </div>
      </div>
    </div>
  );
}

export default SalesContainer;
