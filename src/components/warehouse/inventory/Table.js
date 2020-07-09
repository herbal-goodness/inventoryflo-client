import React, { useEffect, useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { withState } from "./withState";
import { GridColumn, Grid } from "@progress/kendo-react-grid";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

const StatefulGrid = withState(Grid);

const Table = () => {
  const dispatch = useDispatch();
  const [salesData, setData] = useState([]);

  const { sales, hasShopifyUrl, hasShopifySecret, isSuccessful } = useSelector(
    ({ sales, userInfo }) => ({
      hasShopifyUrl: userInfo.user?.shopifyDomain.length > 3,
      hasShopifySecret: userInfo.user?.shopifySecret.length > 3,
      isSuccessful: userInfo.successful,
      sales: sales.products,
    }),
    shallowEqual
  );
  useEffect(() => {
    hasShopifyUrl &&
      hasShopifySecret &&
      isSuccessful &&
      dispatch({ type: "GET_PRODUCTS" });
    let s = [];
    if (sales) {
      s = sales.map(({ images, updated_at, variants, title, vendor }) => {
        return {
          image: images && images[0],
          updated_at,
          ...variants[0],
          title,
          vendor,
        };
      });
    }
    setData(s);
  }, []);

  return (
    <div>
      <StatefulGrid data={salesData} style={{ height: "600px" }}>
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
        <GridColumn field="sku" title="SKU" filter="numeric" />
        <GridColumn field="inventory_management" title="Condition" />
        <GridColumn field="fulfillment_service" title="Location" />
        <GridColumn field="inventory_policy" title="Bin Location" />
        <GridColumn
          field="inventory_quantity"
          title="Available"
          filter="numeric"
        />
        <GridColumn field="vendor" title="On Hand" />
        <GridColumn field="price" title="Price" filter="numeric" />
        <GridColumn field="updated_at" title="Last Modified" />
      </StatefulGrid>
    </div>
  );
};

export default Table;
