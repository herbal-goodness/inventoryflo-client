import React, { useEffect, useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { withState, ColumnMenu } from "./withState";
import { GridColumn, Grid } from "@progress/kendo-react-grid";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Spinner } from "../../utils/components";

const StatefulGrid = withState(Grid);

const Table = () => {
  const dispatch = useDispatch();

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

  setTimeout(() => {
    if (isLoading) {
      dispatch({
        type: "PRODUCTS_ERROR",
      });
    }
  }, 10000);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <StatefulGrid data={sales || []} style={{ height: "600px" }}>
        <GridColumn
          field="image"
          title={" "}
          cell={(props) => (
            <td colSpan={props.colSpan} style={props.style}>
              {<img src={props.dataItem?.image} alt="" />}
            </td>
          )}
          filterable={false}
          sortable={false}
          width={50}
        />
        <GridColumn
          field="title"
          title="Product Name"
          width={200}
          className="truncate"
        />
        <GridColumn
          field="sku"
          title="SKU"
          filterable={false}
          columnMenu={ColumnMenu}
        />
        <GridColumn
          field="inventory_management"
          title="Condition"
          filterable={false}
          columnMenu={ColumnMenu}
        />
        <GridColumn
          field="fulfillment_service"
          title="Location"
          filterable={false}
          columnMenu={ColumnMenu}
        />
        <GridColumn
          field="inventory_policy"
          title="Bin Location"
          filterable={false}
          columnMenu={ColumnMenu}
        />
        <GridColumn
          field="inventory_quantity"
          title="Available"
          filter="numeric"
          filterable={false}
          columnMenu={ColumnMenu}
        />
        <GridColumn
          field="vendor"
          title="On Hand"
          filterable={false}
          columnMenu={ColumnMenu}
        />
        <GridColumn
          field="price"
          title="Price"
          filter="numeric"
          filterable={false}
          columnMenu={ColumnMenu}
        />
        <GridColumn
          field="updated_at"
          title="Last Modified"
          filterable={false}
          columnMenu={ColumnMenu}
        />
      </StatefulGrid>
    </div>
  );
};

export default Table;
