import React, { useEffect, useState } from "react";
import SalesTable from "./OrdersTable";
import InventorySidePane from "./InventorySidePane";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

function OrdersContainer() {
  const dispatch = useDispatch();
  const [exportData, setExport] = useState(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState([]);
  const [filterChannel, setFilter] = useState({});

  const {
    isLoading,
    orders,
    allStatus,
    hasShopifyUrl,
    hasShopifySecret,
    isSuccessful,
  } = useSelector(
    ({ orders, userInfo }) => ({
      hasShopifyUrl:
        userInfo.user.shopifyDomain && userInfo.user.shopifyDomain.length > 3,
      hasShopifySecret:
        userInfo.user.shopifySecret && userInfo.user.shopifySecret.length > 3,
      isSuccessful: userInfo.successful,
      orders: orders.userOrders,
      allStatus: orders.allStatus,
      isLoading: orders.loading,
    }),
    shallowEqual
  );
  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setStatus(orders);
    }
    const { value } = e.target;
    setQuery(value);
  };
  const handleCategoryFilter = (e, rootFilter) => {
    e.preventDefault();
    if (e.target.value === "all") {
      setStatus(orders);
    } else {
      const result = orders.filter(({ status }) => status === e.target.value);
      setStatus(result);
    }
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
      orders.length < 1 &&
      dispatch({ type: "GET_ORDERS", payload: {} });
    setStatus(orders);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setStatus(orders);
    }
    setStatus(orders);
  }, [isLoading]);

  const exportFile = () => {
    setFilter({});
    exportData.save();
  };

  const clearFilter = (date1, date2) => {
    date1.current.value = "";
    date2.current.value = "";
    dispatch({ type: "GET_ORDERS", payload: {} });
    setStatus(orders);
  };

  // useEffect(() => {
  //   setStatus(orders);
  // }, []);
  return (
    <div className="container-fluid mx-auto">
      <div className="row">
        <div className="col-md-3 inv-side-wrapper pt-5 inv-col-1">
          <h2 className="filter-inv-header">filter inventory</h2>
          <InventorySidePane
            category={(orders && allStatus) || []}
            handleCategoryFilter={handleCategoryFilter}
            handleChange={handleChange}
            handleSearch={handleSearch}
            clearFilter={clearFilter}
            type="order"
          />
        </div>
        <div className="col-md-9 inv-col-2">
          <header className="d-flex justify-content-between mb-2 dashboard-header flex-wrap">
            <div>
              <h2>
                <i className="fa fa-shopping-cart fa-fw" aria-hidden="true"></i>
                Orders
              </h2>
            </div>
            <div>
              <button
                to=""
                className="btn btn-info apply-filter mr-3 btn-block-sm"
              >
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
            // orders={orders}
            query={query}
            status={status}
            filterChannel={filterChannel}
          />
        </div>
      </div>
    </div>
  );
}

export default OrdersContainer;
